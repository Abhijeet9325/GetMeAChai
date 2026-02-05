"use server"
import Razorpay from "razorpay"
import connectDB from "@/db/connectDB"
import Payment from "@/app/models/Payment"
import User from "@/app/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    console.log("AMOUNT RECEIVED (rupees):", amount);
    await connectDB();
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET_ID })
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
    console.log("ORDER AMOUNT (paise):", x.amount);
    await Payment.create({ order_id: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message, from_user: paymentform.from_user || "Anonymous" });
    return x;

}
export const fetchUser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });
    if (!u) return null;
    let user = u.toObject({ flattenObjectIds: true });
    return user;
}

export const fetchPayments = async (username) => {
    await connectDB();
    // find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean();
}

export const updatedProfile = async (data, oldusername) => {
    await connectDB();
    let ndata = Object.fromEntries(data);
    console.log(ndata);
    // if the username is being updated, check if user is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username });
        if (u) {
            return { error: "username already exists" }
        }

    }
    await User.updateOne({ email: ndata.email }, ndata)
} 