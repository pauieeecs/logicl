import { useToast } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { createContext, useContext, useEffect, useState } from "react"
import firebase from "../libs/firebase"
import { User } from "../types/authTypes"

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
  signout: (redirect: string) => void
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
        }
        setUser(tempUser)
        setLoading(false)
        return true
      }
    }
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
        slug: "testt",
        birthYear: birthYear,
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

  const signout = async (redirect: string): Promise<void> => {
    setLoading(true)
    await firebase.auth().signOut()
    handleUser(null)
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
  }

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsub
  }, [])

  return {
    user,
    loading,
    signin,
    signup,
    signout,
  }
}
