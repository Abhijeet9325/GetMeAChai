"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setshowDropdown] = useState(false)

  return (
    <nav className='bg-slate-900 flex px-8 h-10 items-center justify-between text-white'>
      <Link href={"/"} className="logo text-white font-bold">
        <div>GetMeAChai!</div>
      </Link>
      <div className="flex gap-3.5 ">
        {session && (
          <div className="relative">
            <button
              onClick={() => setshowDropdown(!showDropdown)}
              onBlur={()=>{setTimeout(() => {
                setshowDropdown(false)
              }, 100);}}
              id="dropdownDefaultButton"
              className="inline-flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium cursor-pointer rounded-xl text-sm px-4 py-2.5"
              type="button"
            >
              Welcome {session.user.email}
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute right-0 mt-2 z-50 ${showDropdown ? "" : "hidden"
                } rounded-base shadow-lg w-44 left-[150px] bg-slate-600 rounded-md`}
            >
              <ul className="p-2 text-sm font-medium flex flex-col ">
                <li>{session && <Link href={"/dashboard"}>
                  <button type="button" className="text-white block p-2 rounded hover:bg-neutral-tertiary-mediumcursor-pointer cursor-pointer">Dashboard</button>
                </Link>}</li>
                <li><a className="block p-2 rounded hover:bg-neutral-tertiary-medium cursor-pointer">Settings</a></li>
                <li><a className="block p-2 rounded hover:bg-neutral-tertiary-medium cursor-pointer">Earnings</a></li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="w-full text-left p-2 rounded hover:bg-neutral-tertiary-medium cursor-pointer"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}

        {session && <Link href={"/dashboard"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer">Dashboard</button>
        </Link>}
        {session &&
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer" onClick={() => { signOut() }}>Logout</button>
        }
        {!session &&
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer">Login</button>
          </Link>
        }
      </div>
    </nav >
  )
}

export default Navbar
