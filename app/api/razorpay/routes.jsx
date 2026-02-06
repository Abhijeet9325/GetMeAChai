import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Razorpay from "razorpay";
import Payment from "@/app/models/Payment";
import connectDB from "@/db/connectDB";


export const POST = async (req) => {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);
    // check if razorpayOrderId is present on the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({ success: false , message :"order id not found"})
    }

    // verify the payment
    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, currentUser.razorpaysecret)

    if (xx) {
        const updatePayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: true })
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_RAZORPAY_URL}/${updatePayment.to_user}?paymentdone=true`)
    }
    else {
        return NextResponse.json({ success: false , message :"payment verifcation failed"})
    }

}