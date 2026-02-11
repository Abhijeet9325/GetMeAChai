"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"
import { fetchUser, updatedProfile } from '@/actions/Useractions'
import { ToastContainer, toast } from 'react-toastify';


const Dashboard = () => {
    const { data: session, status } = useSession()
    const router = useRouter();
    const [form, setform] = useState({})

    useEffect(() => {
        if (status === "unauthenticated") {
            router.replace("/login")
        }
       
        else {
            getData()
        }
    }, [status, router])

    const getData = async () => {
        if (session?.user?.name) {
            let u = await fetchUser(session.user.name);
            setform(u);
        }
    }

    const handleChange = async (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        // update(); // This might reload session, careful with loop
        console.log(e)
        let a = await updatedProfile(e, session.user.name);
        toast.success("Profle Updated!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("username", form.username);

        const res = await updatedProfile(formData, session.user.email);
    }

    if (status === "loading") {
        return <div className="flex justify-center items-center h-screen text-slate-900">Loading...</div>
    }

    if (status === "unauthenticated") {
        return <div className="flex justify-center items-center h-screen text-slate-900">Redirecting...</div>
    }

    return (
        <><ToastContainer
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
            <div className="min-h-screen flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-3xl bg-slate-100  border border-slate-200 rounded-2xl  p-8 md:p-10 relative overflow-hidden">

                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-slate-300"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-400/10 rounded-full blur-[80px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px]"></div>

                    <div className="relative z-10">
                        {/* Title */}
                        <div className="text-center mb-10">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-600 mb-2">
                                Dashboard
                            </h1>
                            <p className="text-slate-600">
                                Manage your profile and payment details
                            </p>
                        </div>

                        {/* Form */}
                        <form action={handleSubmit} className="space-y-6">

                            {/* Profile Preview Section */}
                            <div className="mb-8 relative group">
                                {/* Cover Image */}
                                <div className="h-40 w-full rounded-xl overflow-hidden bg-slate-100 border-2 border-slate-200 relative">
                                    {form.coverpic ? (
                                        <img src={form.coverpic} alt="Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Profile Image */}
                                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-slate-100 shadow-xl">
                                        {form.profilepic ? (
                                            <img src={form.profilepic} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="h-6"></div> {/* Spacer for profile pic overlap */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        Name
                                    </label>
                                    <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 placeholder-slate-400 transition-all outline-none"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-purple-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        Email
                                    </label>
                                    <input value={form.email ? form.email : ""} onChange={handleChange} type="email" name='email' id="email"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-slate-900 placeholder-slate-400 transition-all outline-none"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                {/* Username */}
                                <div className="space-y-2">
                                    <label htmlFor="username" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-pink-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                        Username
                                    </label>
                                    <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id="username"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 text-slate-900 placeholder-slate-400 transition-all outline-none"
                                        placeholder="Choose a username"
                                    />
                                </div>

                                {/* Profile Pic URL */}
                                <div className="space-y-2">
                                    <label htmlFor="profilepic" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-indigo-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                        Profile Picture URL
                                    </label>
                                    <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name='profilepic' id="profilepic"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-900 placeholder-slate-400 transition-all outline-none"
                                        placeholder="https://example.com/avatar.jpg"
                                    />
                                </div>

                                {/* Cover Pic URL */}
                                <div className="space-y-2 col-span-1 md:col-span-2">
                                    <label htmlFor="coverpic" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-teal-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                        Cover Picture URL
                                    </label>
                                    <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name='coverpic' id="coverpic"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-900 placeholder-slate-400 transition-all outline-none"
                                        placeholder="https://example.com/cover.jpg"
                                    />
                                </div>

                                {/* Razorpay ID */}
                                <div className="space-y-2 col-span-1 md:col-span-2">
                                    <label htmlFor="razorpayid" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>
                                        Razorpay ID
                                    </label>
                                    <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="password" name='razorpayid' id="razorpayid"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 placeholder-slate-400 transition-all outline-none"
                                        placeholder="rzp_test_..."
                                    />
                                </div>

                                {/* Razorpay Secret */}
                                <div className="space-y-2 col-span-1 md:col-span-2">
                                    <label htmlFor="razorpaysecret" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                        Razorpay Secret
                                    </label>
                                    <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="password" name='razorpaysecret' id="razorpaysecret"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 placeholder-slate-400 transition-all outline-none"
                                        placeholder="Enter your Razorpay Secret"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button type='submit'
                                    className="w-full py-4 rounded-xl bg-slate-600 text-white cursor-pointer font-bold hover:bg-slate-700 text-lg ">
                                    Save Changes
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard