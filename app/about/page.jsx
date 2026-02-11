import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: "About | GetMeAChai",
  description: "Learn more about GetMeAChai and how it helps creators receive support.",
};


const About = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-slate-900">
      
      {/* Hero Section */}
      <div className="w-full max-w-4xl text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px] -z-10"></div>
        <h1 className="text-5xl md:text-6xl text-slate-800 font-extrabold mb-6">
          About <span className="text-blue-500">GetMeAChai!</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A crowdfunding platform designed for creators, developers, and artists to receive support from their fans. 
          Start accepting payments and buy yourself a chai! ☕
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Mission Card */}
        <div className="bg-white backdrop-blur-md border border-slate-200 p-8 rounded-3xl">
          <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            We believe that every creator deserves to be rewarded for their hard work. 
            GetMeAChai bridges the gap between fans and creators, making it effortless to receive financial support 
            while building a community around your passion.
          </p>
        </div>

        {/* How It Works Card */}
        <div className="bg-white backdrop-blur-md border border-slate-200 p-8 rounded-3xl">
          <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-pink-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">How It Works</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center text-xs font-bold">1</span>
              Create your profile & customize it
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center text-xs font-bold">2</span>
              Share your unique link with fans
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center text-xs font-bold">3</span>
              Receive payments directly!
            </li>
          </ul>
        </div>
      </div>

      {/* Community Section */}
      <div className="w-full max-w-5xl mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2"></div>
        
        <h2 className="text-3xl font-bold mb-6 text-slate-900 relative z-10">Join the Community</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto relative z-10">
          Whether you are a developer, designer, writer, or artist, GetMeAChai gives you the freedom 
          to monetize your work and connect with your audience on a personal level.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <Link href="/login" className="px-8  py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors ">
            Get Started
          </Link>
         
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-slate-500 text-sm flex items-center gap-2">
        <span>Made with</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500 animate-pulse">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.5 3c1.76 0 3.63.9 4.5 2.374C12.87 3.9 14.74 3 16.5 3c2.786 0 5.25 2.322 5.25 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        <span>by Abhijit Wankhade</span>
      </div>

    </div>
  )
}

export default About