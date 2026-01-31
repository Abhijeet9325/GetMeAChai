"use server"
import Razorpay from "razorpay"
import connectDB from "@/db/connectDB"
import Payment from "@/app/models/Payment"
import User from "@/app/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID  , key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET_ID })
    instance.orders.create({
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options);
    // create a payment object which shows a pending payment in the database

    await Payment.create({ order_id: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message, from_user: paymentform.from_user || "Anonymous" });
    return x;
} 