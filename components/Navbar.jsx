import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-blue-950 flex px-8 h-10 items-center justify-between text-white'>
      <div className="logo text-white font-bold">GetMeAChai!</div>

      <div>
        <Link href={"/login"}>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer">Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
