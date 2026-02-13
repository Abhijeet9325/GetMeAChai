"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import { useRouter } from "next/navigation"
import { useEffect } from "react"


const Login = () => {
  const { data: session ,status} = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard")
    }
  }, [status, router])

  if (status === "loading" || status === "authenticated") {
    return <div className="flex justify-center items-center h-screen text-slate-900">Loading...</div>
  }

  useEffect(() => {
    document.title = "Login - GetMeAChai"
  }, [])

  return (
    <div className='flex items-center justify-center min-h-[80vh] px-4'>
      <div className="w-full max-w-md bg-white backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-8 relative overflow-hidden group hover:border-slate-300 transition-all duration-300">

        {/* Background Gradients */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-400/10 rounded-full blur-[60px] "></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-400/10 rounded-full blur-[60px]"></div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="text-center space-y-2">
            <h1 className='text-3xl font-extrabold text-blue-600'>
              Welcome Back!
            </h1>
            <p className="text-slate-600 text-sm">
              Login to get funded by your fans & followers
            </p>
          </div>

          <div className="w-full flex flex-col gap-3 mt-4">

            {/* <!-- Google --> */}
            <button
              className="flex cursor-pointer items-center justify-center gap-3 w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-xl px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 group/btn">
              <svg className="h-5 w-5 group-hover/btn:scale-110 transition-transform" viewBox="-0.5 0 48 48">
                <path fill="#FBBC05" d="M9.83 24c0-1.52.25-2.99.7-4.36L2.62 13.6A23.94 23.94 0 000 24c0 3.74.87 7.26 2.62 10.39l7.9-6.05A13.8 13.8 0 019.83 24z" />
                <path fill="#EA4335" d="M23.71 10.13c3.31 0 6.3 1.17 8.65 3.09l6.84-6.83C35.04 2.77 29.7.53 23.71.53 14.43.53 6.45 5.84 2.62 13.6l7.9 6.04c1.82-5.53 7.02-9.51 13.19-9.51z" />
                <path fill="#34A853" d="M23.71 37.87c-6.16 0-11.36-3.98-13.19-9.51l-7.9 6.04c3.82 7.76 11.8 13.07 21.09 13.07 5.73 0 11.2-2.04 15.31-5.85l-7.5-5.8c-2.12 1.33-4.79 2.05-7.81 2.05z" />
                <path fill="#4285F4" d="M46.15 24c0-1.39-.21-2.88-.54-4.27H23.71v9.07h12.6c-.63 3.09-2.35 5.47-4.8 7.02l7.5 5.8C43.34 37.61 46.15 31.65 46.15 24z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* <!-- LinkedIn --> */}
            <button
              className="cursor-pointer flex items-center justify-center gap-3 w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-xl px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 group/btn">
              <svg className="h-5 w-5 fill-[#0077B5] group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.5 2.5 0 002.5 6c0 1.38 1.11 2.5 2.48 2.5h.03A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 21h4V9H3v12zm7-12h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.09V21h-4v-5.42c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21h-4V9z" />
              </svg>
              <span>Continue with LinkedIn</span>
            </button>

            {/* <!-- Twitter --> */}
            <button
              className="cursor-pointer  flex items-center justify-center gap-3 w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-xl px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 group/btn">
              <svg className="h-5 w-5 fill-[#1DA1F2] group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.63 0-4.5 2.46-3.93 5.03A12.94 12.94 0 013 4s-4 9 5 13a13.07 13.07 0 01-8 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
              <span>Continue with Twitter</span>
            </button>

            {/* <!-- GitHub --> */}
            <button
              onClick={() => { signIn("github") }}
              className="flex cursor-pointer  items-center justify-center gap-3 w-full bg-slate-900 text-white hover:bg-slate-800 border border-transparent rounded-xl px-5 py-3 text-sm font-bold shadow-lg shadow-slate-900/10 transition-all duration-300 transform hover:-translate-y-0.5 group/btn">
              <svg className="h-5 w-5 group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.8.5 12.3c0 5.2 3.44 9.6 8.2 11.16.6.1.82-.27.82-.6v-2.2c-3.34.75-4.04-1.44-4.04-1.44-.55-1.43-1.34-1.8-1.34-1.8-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.27 1.86 1.27 1.08 1.9 2.84 1.35 3.53 1.03.1-.8.42-1.35.76-1.66-2.67-.32-5.47-1.38-5.47-6.14 0-1.36.47-2.47 1.24-3.34-.13-.32-.54-1.6.12-3.34 0 0 1.01-.33 3.3 1.27a11.1 11.1 0 016 0c2.28-1.6 3.3-1.27 3.3-1.27.66 1.74.25 3.02.12 3.34.77.87 1.24 1.98 1.24 3.34 0 4.78-2.8 5.82-5.48 6.13.43.38.82 1.13.82 2.28v3.38c0 .33.22.7.82.6C20.56 21.9 24 17.5 24 12.3 24 5.8 18.85.5 12 .5z" />
              </svg>
              <span>Continue with GitHub</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login