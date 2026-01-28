import React from 'react'
export default async function Page({ params }) {
    const { username } = await params; // ❌ no await needed, but async function is OK

    return (
        <>

            <div className='cover w-full relative'>
                <img className='w-full object-cover h-[350] my-auto' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/19.gif?token-hash=spU6Nwq97Z5xa2YAIEIVf9vXt7Wstbz85d4rhD4O6N4%3D&token-time=1770163200" alt="" />
                <div className='absolute flex -bottom-32 right-[47%]'>
                    <img width={95} height={95} className=' rounded-lg items-center text-center' src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg" alt="" />
                </div>
            </div>
            <div className='self-info flex-col flex items-center justify-center my-32 mr-6'>
                <div className='font-bold'>
                @{username}
                </div>
                <div className='text-slate-400'>Creating Animated art for VTT's</div>
                <div className='text-slate-400'>22,687 members  106posts  $18,770/release</div>
             <div className="min-h-screen -my-24 text-white flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">

        {/* LEFT: Supporters */}
        <div className="bg-[#0b1220] rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Supporters</h2>

          <div className="space-y-4 text-sm">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs">
                  <img src="/avatar.gif" alt="" />
                </div>
                <p className="text-slate-300">
                  <span className="font-semibold text-white">Shubham</span> donated{" "}
                  <span className="font-semibold text-white">$30</span> with a message
                  “I support you bro. Lots of ❤️”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Payment */}
        <div className="bg-[#0b1220] rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-2 rounded-lg bg-[#111827] border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              placeholder="Enter Message"
              className="w-full px-4 py-2 rounded-lg bg-[#111827] border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="number"
              placeholder="Enter Amount"
              className="w-full px-4 py-2 rounded-lg bg-[#111827] border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 font-medium hover:opacity-90">
              Pay
            </button>

            <div className="flex gap-3 pt-2">
              {["$10", "$20", "$30"].map((amt) => (
                <button
                  key={amt}
                  className="flex-1 py-2 rounded-lg bg-[#111827] border border-slate-700 hover:bg-slate-800"
                >
                  Pay {amt}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
            </div>
        </>

    );
}

