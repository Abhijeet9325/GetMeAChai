import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-white h-[80vh] px-4">
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-purple-600/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="z-10 flex flex-col items-center gap-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight pb-2">
              Buy Me a Chai
            </h1>
            <span className="animate-bounce-slow">
              <img className="invertImg drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" src="/tea.gif" width={80} alt="tea cup" />
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            A crowdfunding platform for creators. Get funded by your fans and followers. Start your journey today!
          </p>
          
          <div className="flex gap-4 mt-4">
            <button type="button" className="text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/30 font-bold rounded-full text-base px-8 py-4 transition-all hover:scale-105 active:scale-95">
              Start Now
            </button>
            <button type="button" className="text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 shadow-lg font-bold rounded-full text-base px-8 py-4 transition-all hover:scale-105 active:scale-95">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-slate-800 h-px w-full max-w-6xl mx-auto opacity-50"></div>

      {/* Features Section */}
      <div className="text-white py-24 px-4">
        <h2 className="font-bold text-center text-4xl mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Your fans can buy you a chai
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all duration-300 w-full md:w-1/3 hover:-translate-y-2">
            <div className="bg-slate-800 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <img src="/man.gif" width={80} alt="fund yourself" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-purple-300">Fund Yourself</h3>
            <p className="text-slate-400 leading-relaxed">Your fans are available for you to help you achieve your creative dreams.</p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 w-full md:w-1/3 hover:-translate-y-2">
            <div className="bg-slate-800 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <img src="/coin.gif" width={80} alt="monetize" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-blue-300">Monetize Passion</h3>
            <p className="text-slate-400 leading-relaxed">Turn your creative passion into a sustainable income stream with ease.</p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/50 hover:bg-slate-800/80 transition-all duration-300 w-full md:w-1/3 hover:-translate-y-2">
            <div className="bg-slate-800 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
              <img src="/group.gif" width={80} alt="community" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-pink-300">Build Community</h3>
            <p className="text-slate-400 leading-relaxed">Connect deeply with your audience and build a loyal community of supporters.</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-slate-800 h-px w-full max-w-6xl mx-auto opacity-50"></div>

      {/* Video Section */}
      <div className="text-white py-24 flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-bold text-4xl mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Learn More About Us
        </h2>
        <div className="w-full max-w-xl p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-2xl">
           <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden bg-black">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/kMRWLz8G5SU?si=3e8aOjbuazvN4-3X" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
           </div>
        </div>
      </div>
    </>
  );
}
