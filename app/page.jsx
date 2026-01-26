import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex gap-2 text-center justify-center flex-col h-[40vh] pt-12">

          <div className=" ml-8 font-bold flex items-center text-center justify-center text-3xl">Buy me a Chai<span><img className="invertImg" src="/tea.gif" width={55} alt="" /></span></div>
          <p>A crowdfunding platform fo Creators. Get funded by your fans and followers.Start now!</p>
          <div>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl cursor-pointer mx-1">Start Now</button>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl cursor-pointer mx-2">Read More</button>
          </div>
        </div>
   

      <div className="bg-white mt-12 opacity-6 h-1 "></div>
      <div className="text-white my-12 p-8 ">
        <h2 className="font-bold text-center text-2xl mb-8">Your fans can buy you a chai</h2>
        <div className="flex items-center text-center justify-around">
          <div className="space-y-2 flex flex-col text-center items-center">
            <img className="bg-slate-400 rounded-full" src="/man.gif" width={88} alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="space-y-2 flex flex-col text-center items-center">
            <img className="bg-slate-400 rounded-full" src="/group.gif" width={88} alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="space-y-2 flex flex-col text-center items-center">
            <img className="bg-slate-400 rounded-full" src="/coin.gif" width={88} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white opacity-6 h-1 "></div>
      <div className="text-white my-12 ">
        <h2 className="font-bold text-center text-2xl ">Learn More About Us</h2>
        <iframe className="flex text-center items-center mb-32 m-auto p-12" width="550" height="330" src="https://www.youtube.com/embed/kMRWLz8G5SU?si=3e8aOjbuazvN4-3X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
