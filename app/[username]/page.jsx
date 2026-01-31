import React from 'react'
import PaymentPage from '@/components/PaymentPage';
export default async function Page({ params }) {
    const { username } = await params;

    return (
        <>
        <PaymentPage username={username}/>
        </>

    );
}

