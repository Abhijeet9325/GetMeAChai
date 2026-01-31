"use client";
import Script from "next/script";
import { initiate } from "@/actions/Useractions";
import { useState } from "react";
import { useSession } from "next-auth/react";

const PaymentPage = ({ username }) => {
    const { data: session } = useSession();

    const [paymentform, setpaymentform] = useState({
        name: "",
        message: "",
        amount: "",
    });

    const handleChange = (e) => {
        setpaymentform({
            ...paymentform,
            [e.target.name]: e.target.value,
          
        });
          console.log(paymentform);
    };

    const handlePayment = async (amount) => {
        const finalAmount = amount || Number(paymentform.amount);

        if (!finalAmount) {
            alert("Please enter amount");
            return;
        }

        const order = await initiate(
            finalAmount,
            username,
            { ...paymentform, from_user: session?.user?.name || "Anonymous" }
        );
        // let order_id = a.id;

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: finalAmount , // paise
            currency: "INR",
            name: "GetMeAChai",
            description: "Test Transaction",
            order_id: order.id,
            callback_url: `${process.env.NEXT_PUBLIC_RAZORPAY_URL}/api/razorpay`,
            prefill: {
                name: paymentform.name ,
                email: paymentform.email,
                contact: "9999999999",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="afterInteractive"
            />

            {/* COVER */} 
            <div className="cover w-full relative"> 
                <img className="w-full object-cover h-[350px]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/19.gif?token-hash=spU6Nwq97Z5xa2YAIEIVf9vXt7Wstbz85d4rhD4O6N4%3D&token-time=1770163200" alt="" /> 
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 border-4 border-slate-900 rounded-lg"> 
                    <img width={150} height={150} className="rounded-lg" src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg" alt="" /> 
                </div> 
            </div>

            {/* PROFILE INFO */} 
            <div className="flex flex-col items-center mt-24 mb-16 text-white"> 
                <div className="font-bold text-3xl mb-1">@{username}</div> 
                <div className="text-slate-400 text-lg mb-2">Creating Animated art for VTT's</div> 
                <div className="text-slate-400 text-sm italic"> 22,687 members · 106 posts · $18,770/release </div> 
            </div>

            {/* MAIN SECTION */} 
            <div className="min-h-screen text-white flex items-start justify-center px-6 pb-20"> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

                    {/* SUPPORTERS */} 
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl h-fit"> 
                        <h2 className="text-2xl font-bold mb-6 text-center">Supporters</h2> 
                        <div className="space-y-6 text-sm"> 
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 bg-slate-900/40 rounded-xl border border-slate-800"> 
                                    <img src="/avatar.gif" className="w-10 h-10 rounded-full border border-slate-600" alt="" /> 
                                    <p className="text-slate-300">
                                        <span className="font-semibold text-white block">Shubham</span>
                                        donated <span className="font-bold text-yellow-500">$30</span> with a message 
                                        <span className="block text-slate-400 italic mt-1">“I support you bro ❤️”</span> 
                                    </p> 
                                </div>
                            ))}
                        </div> 
                    </div>

                    {/* PAYMENT */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl sticky top-24">
                        <h2 className="text-2xl font-bold mb-6 text-center">Make a Payment</h2>

                        <div className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-400">Name</label>
                                <input
                                    name="name"
                                    value={paymentform.name}
                                    onChange={handleChange}
                                    placeholder="Enter Name"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-400">Message</label>
                                <input
                                    name="message"
                                    value={paymentform.message}
                                    onChange={handleChange}
                                    placeholder="Enter Message"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-400">Amount</label>
                                <input
                                    name="amount"
                                    type="number"
                                    value={paymentform.amount}
                                    onChange={handleChange}
                                    placeholder="Enter Amount"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                />
                            </div>

                            <button
                                onClick={() => handlePayment()}
                                className="w-full py-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-bold text-lg shadow-lg shadow-purple-900/20 transition-all active:scale-[0.98] mt-2"
                            >
                                Pay
                            </button>

                            <div className="flex gap-3 mt-4"> 
                                {[100, 200, 300].map((amt) => (
                                    <button 
                                        key={amt}
                                        onClick={() => handlePayment(amt)}
                                        className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors font-medium text-slate-300 hover:text-white hover:border-slate-600"
                                    >
                                        ₹{amt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PaymentPage;  