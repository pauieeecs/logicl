import { useToast } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { createContext, useContext, useEffect, useState } from "react"
import firebase from "../libs/firebase"
import { User } from "../types/authTypes"
import slugGenerator from "../utils/slugGenerator"

type Auth = {
  user: User
  loading: boolean
  signin: (email: string, password: string, redirect: string) => void
  signup: (
    email: string,
    password: string,
    fullName: string,
    birthDay: number,
    birthMonth: number,
    birthYear: number,
    redirect: string
  ) => void
  signout: (redirect: string | boolean) => void
  signinWithProvider: (isGithub: boolean) => void
}

const authContext = createContext<Auth>(null)

export const useAuth = (): Auth => {
  return useContext(authContext)
}

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

const useProvideAuth = (): Auth => {
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<User>(null)

  const router = useRouter()
  const toast = useToast()

  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const githubProvider = new firebase.auth.GithubAuthProvider()

  const handleUser = async (rawUser: firebase.User): Promise<boolean> => {
    setLoading(true)
    if (rawUser) {
      const userDoc = await firebase.firestore().collection("user").doc(rawUser.uid).get()
      if (userDoc.exists) {
        const userData = userDoc.data()
        const tempUser: User = {
          userId: rawUser.uid,
          fullName: userData.fullName,
          photoUrl: userData.photoUrl,
          email: userData.email,
          userName: userData.userName,
          birthDate: userData.birthDate,
          authProvider: userData.authProvider,
          country: userData.country,
          city: userData.city,
        }
        setUser(tempUser)
        console.log(tempUser)
        localStorage.setItem("logicl-user", JSON.stringify(tempUser))
        setLoading(false)
        return true
      }
    }
    localStorage.removeItem("logicl-user")
    setUser(null)
    setLoading(false)
    return false
  }

  const signin = async (email: string, password: string, redirect: string): Promise<void> => {
    setLoading(true)
    try {
      const res = await firebase.auth().signInWithEmailAndPassword(email, password)
      handleUser(res.user)
      router.push(redirect).then(() => {
        toast({
          title: "Başarılı",
          description: "Başarıyla giriş yapıldı.",
          status: "success",
          duration: 6000,
          isClosable: true,
        })
        setLoading(false)
      })
    } catch (err) {
      console.log(err)
      toast({
        title: "Hata oluştu.",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    }
  }

  const signup = async (
    email: string,
    password: string,
    fullName: string,
    birthDay: number,
    birthMonth: number,
    birthYear: number,
    redirect: string
  ): Promise<void> => {
    setLoading(true)
    try {
      const authResponse = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const tempUser: User = {
        userId: authResponse.user.uid,
        fullName: fullName,
        photoUrl: "",
        email: email,
        userName: slugGenerator(fullName),
        birthDate: `${birthDay}/${birthMonth}/${birthYear}`,
        authProvider: "email",
        country: "",
        city: "",
      }
      await fetch("https://us-central1-logicl.cloudfunctions.net/user/create", {
        method: "POST",
        body: JSON.stringify(tempUser),
      })
      handleUser(authResponse.user)
      router.push(redirect).then(() => {
        toast({
          title: "Başarılı.",
          description: "Hesabını başarıyla oluşturduk.",
          status: "success",
          duration: 6000,
          isClosable: true,
        })
        setLoading(false)
      })
    } catch (err) {
      console.log(err)
      toast({
        title: "Hata oluştu.",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    }
  }

  const signinWithProvider = async (isGithub: boolean): Promise<void> => {
    try {
      setLoading(true)
      const authResponse = await firebase
        .auth()
        .signInWithPopup(isGithub ? githubProvider : googleProvider)
      const mail = authResponse.user.email
      const username = authResponse.additionalUserInfo.username
      const tempUser: User = {
        userId: authResponse.user.uid,
        fullName: authResponse.user.displayName,
        photoUrl: authResponse.user.photoURL,
        email: mail,
        userName: username ? username : slugGenerator(authResponse.user.displayName),
        birthDate: "",
        authProvider: isGithub ? "github" : "google",
        country: "",
        city: "",
      }
      await fetch("https://us-central1-logicl.cloudfunctions.net/user/create", {
        method: "POST",
        body: JSON.stringify(tempUser),
      })
      handleUser(authResponse.user)
      router.push("/").then(() => {
        toast({
          title: "Başarılı.",
          description: "Başarıyla giriş yapıldı.",
          status: "success",
          duration: 6000,
          isClosable: true,
        })
        setLoading(false)
      })
    } catch (err) {
      console.log(err)
      toast({
        title: "Hata oluştu.",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    }
  }

  const signout = async (redirect: string): Promise<void> => {
    setLoading(true)
    await firebase.auth().signOut()
    handleUser(null)
    if (redirect) {
      router.push(redirect).then(() => {
        toast({
          title: "Başarılı.",
          description: "Çıkış işlemi başarıyla tamamlandı.",
          status: "success",
          duration: 6000,
          isClosable: true,
        })
        setLoading(false)
      })
    } else {
      toast({
        title: "Başarılı.",
        description: "Çıkış işlemi başarıyla tamamlandı.",
        status: "success",
        duration: 6000,
        isClosable: true,
      })
      setLoading(false)
    }
    setLoading(true)
  }

  useEffect(() => {
    const rawUserData = localStorage.getItem("logicl-user")
    const userData = JSON.parse(rawUserData)
    if (userData) setUser(userData)
    const unsub = firebase.auth().onAuthStateChanged((user) => handleUser(user))
    return () => unsub
  }, [])

  return {
    user,
    loading,
    signin,
    signup,
    signout,
    signinWithProvider,
  }
}
