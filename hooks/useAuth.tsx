import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth"
import { auth } from "../firebase"
import { IAuth, Auth } from "../interfaces/Auth"
import errors from "../utils/errors"
import toast from "react-hot-toast"

const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  loading: false,
})

export const AuthProvider = ({ children }: Auth) => {
  const [loading, setLoading] = useState<boolean | false>(false)
  const [user, setUser] = useState<User | null>(null)
  const [initialLoading, setInitialLoading] = useState<boolean | true>(true)
  const router = useRouter()

  useEffect(() => 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoading(false)
      } else {
        setUser(null)
        setLoading(true)
        router.push("/login")
      }

      setInitialLoading(false)
    }), [auth]
  )

  const signUp = async (email: string, password: string) => {
    setLoading(true)

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user)
      router.push("/")
      setLoading(false)
    })
    .catch((err) => toast.error(errors[err.code]))
    .finally(() => setLoading(false))
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true)

    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user)
      router.push("/")
      setLoading(false)
    })
    .catch((err) => toast.error(errors[err.code]))
    .finally(() => setLoading(false))
  }

  const logout = async () => {
    setLoading(true)
    signOut(auth).then(() => {
      setUser(null)
    })
    .catch((err) => alert(err))
    .finally(() => setLoading(false))
  }

  const memoedValue = useMemo(
    () => ({ user, signUp, signIn, logout, loading }),
    [user, loading]
  )

  return (
    <AuthContext.Provider value={memoedValue}>{!initialLoading && children}</AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}