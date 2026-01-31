"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setshowDropdown] = useState(false)
  

  return (
    <nav className='bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-white/10 flex px-4 md:px-8 h-16 items-center justify-between text-white sticky top-0 z-50'>
      <Link href={"/"} className="logo flex items-center gap-2 group cursor-pointer">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
          GetMeAChai!
        </div>
        <img src="/tea.gif" width={30} alt="" className="group-hover:scale-110 transition-transform duration-300" />
      </Link>
      
      <div className="flex gap-4 items-center">

        {session && <>
          <div className="relative">
            <button 
              onClick={() => setshowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setshowDropdown(false), 300)}
              className="group flex items-center justify-center text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 font-medium cursor-pointer rounded-full text-sm px-5 py-2.5 transition-all duration-300 shadow-sm"
            >
              <span className="mr-2 text-slate-300 group-hover:text-white transition-colors">Hello,</span> 
              <span className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{session.user.name || session.user.email.split('@')[0]}</span>
              <svg className={`w-4 h-4 ml-2 text-slate-400 group-hover:text-white transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute right-0 mt-3 w-48 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl transform transition-all duration-200 origin-top-right ${showDropdown ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
            >
              <ul className="py-2 text-sm font-medium flex flex-col">
                <li>
                  <Link
                    href="/dashboard"
                    onClick={() => setshowDropdown(false)}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-slate-700/50 cursor-pointer text-slate-200 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/${session.user.name}`}
                    onClick={() => setshowDropdown(false)}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-slate-700/50 cursor-pointer text-slate-200 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    Your Page
                  </Link>
                </li>

                <div className="h-px bg-slate-700 my-1 mx-2"></div>

                <li>
                  <button
                    onClick={() => signOut()}
                    className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-red-500/10 hover:text-red-400 cursor-pointer text-slate-200 transition-colors"
                  >
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>}

        {!session &&
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-full text-sm px-6 py-2.5 text-center transition-all hover:scale-105 active:scale-95">Login</button>
          </Link>
        }
      </div>
    </nav >
  )
}

export default Navbar
