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
      const userDoc = await firebase.firestore().collection("users").doc(rawUser.uid).get()
      if (userDoc.exists) {
        const userData = userDoc.data()
        const tempUser: User = {
          uid: rawUser.uid,
          name: userData.name,
          photoUrl: userData.photoUrl,
          email: userData.email,
          slug: userData.slug,
          birthYear: userData.birthYear,
          provider: userData.providerData,
        }
        setUser(tempUser)
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
    birthYear: number,
    redirect: string
  ): Promise<void> => {
    setLoading(true)
    try {
      const authResponse = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const tempUser: User = {
        uid: authResponse.user.uid,
        name: fullName,
        photoUrl: "",
        email: email,
        slug: slugGenerator(fullName),
        birthYear: birthYear,
        provider: "email",
      }
      await firebase.firestore().collection("users").doc(authResponse.user.uid).set(tempUser)
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
      const tempUser: User = {
        uid: authResponse.user.uid,
        name: authResponse.user.displayName,
        photoUrl: authResponse.user.photoURL,
        email: mail,
        slug: slugGenerator(authResponse.user.displayName),
        birthYear: 0,
        provider: isGithub ? "github" : "google",
      }
      await firebase.firestore().collection("users").doc(authResponse.user.uid).set(tempUser)

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
