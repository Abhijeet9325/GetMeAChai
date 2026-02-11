import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-slate-900 min-h-[80vh] px-4 py-16 md:py-0">
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-slate-900/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="z-10 flex flex-col items-center gap-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center  justify-center gap-3">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r text-slate-800 pb-2">
              Buy Me  <span className="text-blue-600">a Chai</span>
            </h1>
            <span className="animate-bounce-slow">
              <img className="drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]" src="/tea.gif" width={80} alt="tea cup" />
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            A crowdfunding platform for creators. Get funded by your fans and followers. Start your journey today!
          </p>

          <div className="flex gap-4 mt-4">
            <Link href={"/dashboard"}>
              <button type="button" className="cursor-pointer text-white bg-slate-800 hover:bg-slate-700 border-slate-300  font-bold rounded-full text-base px-8 py-4 ">
                Start Now
              </button>
            </Link>
            <Link href={"/about"}>
            <button type="button" className=" cursor-pointer text-slate-700 bg-white border hover:bg-slate-50 border-slate-200 font-bold rounded-full text-base px-8 py-4 ">
              Read More
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-slate-200 h-px w-full max-w-6xl mx-auto opacity-50"></div>

      {/* Features Section */}
      <div className="text-slate-900 py-24 px-4">
        <h2 className="font-bold text-center text-4xl mb-16 text-blue-600">
          Your fans can buy you a chai
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-200 duration-300 w-full md:w-1/3 ">
            <div className="bg-slate-100 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <img src="/man.gif" width={80} alt="fund yourself" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-purple-600">Fund Yourself</h3>
            <p className="text-slate-600 leading-relaxed">Your fans are available for you to help you achieve your creative dreams.</p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-200 w-full md:w-1/3  ">
            <div className="bg-slate-100 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <img src="/coin.gif" width={80} alt="monetize" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-blue-600">Monetize Passion</h3>
            <p className="text-slate-600 leading-relaxed">Turn your creative passion into a sustainable income stream with ease.</p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-200 w-full md:w-1/3  ">
            <div className="bg-slate-100 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(236,72,153,0.1)]">
              <img src="/group.gif" width={80} alt="community" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-pink-600">Build Community</h3>
            <p className="text-slate-600 leading-relaxed">Connect deeply with your audience and build a loyal community of supporters.</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-slate-200 h-px w-full max-w-6xl mx-auto opacity-50"></div>

      {/* Video Section */}
      <div className="text-slate-900 py-24 flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-bold text-4xl mb-12 text-slate-800">
          Learn More About Us
        </h2>
        <div className="w-full max-w-xl p-2 rounded-2xl ">
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
