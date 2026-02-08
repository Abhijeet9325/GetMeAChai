import React from 'react'
import PaymentPage from '@/components/PaymentPage';
import { notFound } from 'next/navigation';
import connectDB from '@/db/connectDB';
import User from '../models/User';

export default async function Page({ params }) {
    const { username } = await params;
    // if the username is not present in the database, show 404 page
    const checkUser =  async () => {
        await connectDB();
        let u = await User.findOne({ username: username }).lean();
        if (!u) {
             notFound();
        }
    }
    await checkUser();
    return (
        <>
            <PaymentPage username={username} />
        </>

    );
}

