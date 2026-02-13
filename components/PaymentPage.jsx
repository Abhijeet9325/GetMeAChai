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
                theme: "light",
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
                <img className="w-full object-cover h-48 md:h-[350px]" src={currentUser?.coverpic} alt="" />
                <div className="absolute -bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 border-4 border-white rounded-lg shadow-lg">
                    <img className="rounded-lg w-32 h-32 md:w-[150px] md:h-[150px] object-cover bg-white" src={currentUser?.profilepic} alt="" />
                </div>
            </div>

            {/* PROFILE INFO */}
            <div className="flex flex-col items-center mt-20 md:mt-24 mb-16 text-slate-900 px-4 text-center">
                <div className="font-bold text-2xl md:text-3xl mb-1">@{shortUsername}</div>
                <div className="text-slate-600 text-base md:text-lg mb-2">Let's help {username} to get chai!</div>
                <div className="text-slate-500 text-sm italic">

                    
               {Payments.length} Payments . ₹     <span className="text-slate-900 font-bold">{Payments?.reduce((a, b) => a + b.amount, 0)} </span> raised </div>
            </div>

            {/* MAIN SECTION */}
            <div className="min-h-screen flex items-start justify-center px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

                    {/* SUPPORTERS */}
                    <div className=" bg-slate-100  border border-slate-200 rounded-2xl p-8 h-fit">
                        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900 ">Supporters</h2>
                        <div className="space-y-6 text-sm">
                            {(!Payments || Payments.length === 0) && (
                                <div className="text-slate-500 text-center">No payments yet</div>
                            )}

                            {Payments?.map((p, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-slate-100">
                                    <img src="/avatar.gif" className="w-10 h-10 rounded-full border border-slate-200" alt="" />
                                    <p className="text-slate-600">
                                        <span className="font-semibold text-slate-900 block">"{p.name}"</span>
                                        {/* <span className="block text-slate-400 italic ">“I support you bro ❤️”</span> */}
                                        donated  <span className="font-bold text-green-600">₹{p.amount / 100}</span> with a message
                                        <span className="block text-slate-500 italic mt-1">"{p.message}"</span>
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* PAYMENT */}
                    <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 md:p-8 sticky top-24">
                        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Make a Payment</h2>

                        <div className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-600">Name</label>
                                <input
                                    name="name"
                                    value={paymentform.name}
                                    onChange={handleChange}
                                    placeholder="Enter Name"
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none text-slate-900 placeholder-slate-400"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-600">Message</label>
                                <input
                                    name="message"
                                    value={paymentform.message}
                                    onChange={handleChange}
                                    placeholder="Enter Message"
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none text-slate-900 placeholder-slate-400"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-600">Amount</label>
                                <input
                                    name="amount"
                                    type="number"
                                    value={paymentform.amount}
                                    onChange={handleChange}
                                    placeholder="Enter Amount"
                                    className="w-full px-4 py-3 rounded-xl bg-white outline-none border border-slate-200  text-slate-900 placeholder-slate-400"
                                />
                            </div>

                            <button
                                onClick={() => handlePayment()} disabled={paymentform.name.length < 4 || paymentform.message.length < 4 || paymentform.amount.length<1}
                                className=" disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed w-full cursor-pointer py-3 rounded-xl  font-bold text-lg bg-slate-700 hover:bg-slate-800 text-white mt-2"
                            >
                                Pay
                            </button>

                            <div className=" flex gap-3 mt-4">
                                {[100, 200, 300].map((amt) => (
                                    <button disabled={paymentform.name.length < 4 || paymentform.message.length < 4}

                                        key={amt}
                                        onClick={() => handlePayment(amt)}
                                        className="disabled:hidden flex-1 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300"
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