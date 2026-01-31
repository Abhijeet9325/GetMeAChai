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
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>

        <div className="relative z-10">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Dashboard
            </h1>
            <p className="text-slate-400">
              Manage your profile and payment details
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Username</label>
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Profile Picture URL</label>
              <input
                type="text"
                placeholder="https://example.com/profile.jpg"
                className="w-full h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Cover Picture URL</label>
              <input
                type="text"
                placeholder="https://example.com/cover.jpg"
                className="w-full h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Razorpay Id</label>
                <input
                  type="text"
                  placeholder="rzp_test_..."
                  className="w-full h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Razorpay Secret</label>
                <input
                  type="password"
                  placeholder="Your secret key"
                  className="w-full h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Save Button */}
            <button className="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold shadow-lg shadow-purple-500/20 transform hover:-translate-y-0.5 transition-all duration-300 mt-4">
              Save Changes
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
