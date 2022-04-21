import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Login } from "../interfaces/Login"
import Head from "next/head"
import Image from "next/image"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useAuth from "../hooks/useAuth"

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(20).required()
}).required()

const Login = () => {
  const [login, setLogin] = useState<boolean | false>(false)
  const { signIn, signUp } = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm<Login>({
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<Login> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password)
    } else {
      await signUp(email, password)
    }
  }

  return (
    <div className="flex items-center justify-center relative w-screen h-screen md:bg-cover md:bg-login">
      <Head>
        <title>
          Login - Netflix
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-4 left-4 cursor-pointer">
        <Image src="/netflix.svg" alt="Netflix" width={150} height={50} />
      </div>
      <form className="relative w-full max-w-sm mt-24 px-6 py-14 space-y-8 bg-black/75 rounded" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label>Email</label>
            <input 
              type="email"
              placeholder="Email"
              className="w-full px-5 py-2 text-black bg-white rounded placeholder-slate-500" 
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-400">Please enter a valid email.</p>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-2 text-black bg-white rounded placeholder-slate-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-red-400">Your password must contain between 6 and 20 characters.</p>
            )}
          </div>
        </div>
        <button className="w-full py-2 font-semibold bg-red-600 rounded" onClick={() => setLogin(true)}>Sign In</button>
        <div className="text-md text-white">
          New to Netflix? <button className="text-white hover:underline" onClick={() => setLogin(false)}>Sign up now</button>
        </div>
      </form>
    </div>
  )
}

export default Login