import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex gap-2 text-center justify-center flex-col h-[40vh]">
        <div className=" font-bold text-3xl">Buy me a Chai</div>
        <p>A crowdfunding platform fo Creators. Get funded by your fans and followers.Start now!</p>
        <div>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl cursor-pointer mx-1">Start Now</button>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl cursor-pointer mx-2">Read More</button>
        </div>
      </div>
      <div className="bg-white opacity-6 h-1"></div>
    </>
  );
}
