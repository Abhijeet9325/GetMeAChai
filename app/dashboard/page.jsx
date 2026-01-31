"use client"
import React from 'react'
import { useRouter } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"

const Dashboard = () => {
    const { data: session } = useSession()
     if (!session) {
      const router = useRouter();
      router.push("/login")
    }
  return (
    <div className="min-h-[70vw] flex items-center justify-center bg-[#020617] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] px-1">
      <div className="w-full max-w-xl text-white">
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center pt-4 mt-6 mb-6">
          Welcome to your Dashboard
        </h1>

        {/* Form */}
        <div className="space-y-1">
          
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              className="w-full h-11 rounded-lg bg-slate-700/70 border border-slate-600 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full h-11 rounded-lg bg-slate-700/70 border border-slate-600 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Username</label>
            <input
              type="text"
              className="w-full h-11 rounded-lg bg-slate-700/70 border border-slate-600 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Profile Picture</label>
            <input
              type="text"
              className="w-full h-11 rounded-lg bg-slate-700/70 border border-slate-600 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Cover Picture</label>
            <input
              type="text"
              className="w-full h-11 rounded-lg bg-slate-700/70 border border-slate-600 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Razorpay Id</label>
            <input
              type="text"
              className="w-full h-11 rounded-lg bg-slate-700/70 border border-slate-600 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Razorpay Secret</label>
            <input
              type="text"
              className="w-full h-11 rounded-lg bg-slate-700/70 border border-slate-600 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <button className="w-full h-11 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 font-medium mt-6">
            Save
          </button>

        </div>
      </div>
    </div>
  )
}

export default Dashboard;
