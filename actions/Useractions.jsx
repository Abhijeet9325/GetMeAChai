"use server"
import Razorpay from "razorpay"
import connectDB from "@/db/connectDB"
import Payment from "@/app/models/Payment"
import User from "@/app/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    console.log("AMOUNT RECEIVED (rupees):", amount);
    await connectDB();


    // 🔴 FETCH USER FIRST
    const user = await User.findOne({ username: to_username }).lean();
    if (!user) {
        throw new Error("User not found");
    }


    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: user.razorpaysecret })

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
    return p;
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
    // Now updated all the usernames in the payment table
    await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
} 