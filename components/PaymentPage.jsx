"use client";
import Script from "next/script";
import { fetchPayments, fetchUser, initiate } from "@/actions/Useractions";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from "next/navigation";


const PaymentPage = ({ username }) => {
    const { data: session } = useSession();

    const shortUsername = session?.user?.name
        ? session.user.name.slice(0, 8)
        : "";

    const [paymentform, setpaymentform] = useState({
        name: "",
        message: "",
        amount: "",
    });
    const [currentUser, setcurrentUser] = useState(null)
    const [Payments, setPayments] = useState([])
    const SearchParams = useSearchParams();

    useEffect(() => {
        getData();
    },
        []);

    useEffect(() => {
        if (SearchParams.get("paymentdone") == "true") {
            toast.success('Thanks for your donation!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [])


    const getData = async () => {
        let u = await fetchUser(username);
        setcurrentUser(u);
        let dbPayments = await fetchPayments(username)
        setPayments(dbPayments);
    }

    const handleChange = (e) => {
        setpaymentform({
            ...paymentform,
            [e.target.name]: e.target.value,

        });
        console.log(paymentform);
    };


    const handlePayment = async (presetAmount) => {
        const finalAmount =
            presetAmount !== undefined
                ? presetAmount
                : Number(paymentform.amount);

        // if (!finalAmount || finalAmount < 10) {
        //     alert("Minimum ₹10 required");
        //     return;
        // }
        const order = await initiate(
            Number.parseInt(finalAmount * 100),
            username,
            { ...paymentform, from_user: session?.user?.name || "Anonymous" }
        );


        // 🔴 name check
        if (!paymentform.name.trim()) {
            toast.error("Please enter your name");
            return;
        }

        // 🔴 message check
        if (!paymentform.message.trim()) {
            toast.error("Please enter a message");
            return;
        }



        const options = {
            key: currentUser.razorpayid,
            currency: "INR",
            name: "GetMeAChai",
            description: "Test Transaction",
            order_id: order.id,
            handler: async function (response) {
                // payment verify
                const res = await fetch("/api/razorpay/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(response),
                });
                const data = await res.json();
                console.log("VERIFY RESPONSE:", data);

                // ✅ NO 404 redirect
                window.location.href = `/${username}?paymentdone=true`;
            },


            prefill: {
                name: paymentform.name,
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="afterInteractive"
            />


            {/* COVER */}
            <div className="cover w-full relative">
                <img className="w-full object-cover h-[350px]" src={currentUser?.profilepic} alt="" />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 border-4 border-slate-900 rounded-lg">
                    <img width={150} height={150} className="rounded-lg" src={currentUser?.coverpic} alt="" />
                </div>
            </div>

            {/* PROFILE INFO */}
            <div className="flex flex-col items-center mt-24 mb-16 text-white">
                <div className="font-bold text-3xl mb-1">@{shortUsername}</div>
                <div className="text-slate-400 text-lg mb-2">Let's help {username} to get chai!</div>
                <div className="text-slate-400 text-sm italic">

                    
               {Payments.length} Payments . ₹     <span className="text-yellow-100 font-semibold">{Payments.reduce((a, b) => a + b.amount, 0)} </span> raised </div>
            </div>

            {/* MAIN SECTION */}
            <div className="min-h-screen text-white flex items-start justify-center px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

                    {/* SUPPORTERS */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl h-fit">
                        <h2 className="text-2xl font-bold mb-6 text-center">Supporters</h2>
                        <div className="space-y-6 text-sm">
                            {(!Payments || Payments.length === 0) && (
                                <div className="text-white">No payments yet</div>
                            )}

                            {Payments?.map((p, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                                    <img src="/avatar.gif" className="w-10 h-10 rounded-full border border-slate-600" alt="" />
                                    <p className="text-slate-300">
                                        <span className="font-semibold text-white block">"{p.name}"</span>
                                        {/* <span className="block text-slate-400 italic ">“I support you bro ❤️”</span> */}
                                        donated  <span className="font-bold text-yellow-500">₹{p.amount / 100}</span> with a message
                                        <span className="block text-slate-400 italic mt-1">"{p.message}"</span>
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
                                onClick={() => handlePayment()} disabled={paymentform.name.length < 4 || paymentform.message.length < 4 || paymentform.amount.length<1}
                                className=" disabled:from-purple-950 to-blue-900 hover:from-purple-900 hover:to-blue-900 w-full cursor-pointer py-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-bold text-lg shadow-lg shadow-purple-900/20 transition-all active:scale-[0.98] mt-2"
                            >
                                Pay
                            </button>

                            <div className=" flex gap-3 mt-4">
                                {[100, 200, 300].map((amt) => (
                                    <button disabled={paymentform.name.length < 4 || paymentform.message.length < 4}

                                        key={amt}
                                        onClick={() => handlePayment(amt)}
                                        className="disabled:hidden flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors font-medium text-slate-300 hover:text-white hover:border-slate-600"
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