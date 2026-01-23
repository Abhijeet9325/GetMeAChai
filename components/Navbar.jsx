import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-950 flex px-8 h-10 items-center justify-between text-white'>
      <div className="logo text-white font-bold">GetMeAChai!</div>
      <ul className='flex gap-6 justify-between'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
