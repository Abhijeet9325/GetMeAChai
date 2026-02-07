import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDB from "@/db/connectDB";
import Payment from "@/app/models/Payment";
import User from "@/app/models/User";

export const POST = async (req) => {
  await connectDB();

  // ✅ JSON read karo (handler JSON bhejta hai)
  const body = await req.json();

  // ✅ correct field: order_id
  const payment = await Payment.findOne({
    order_id: body.razorpay_order_id,
  });

  if (!payment) {
    return NextResponse.json({
      success: false,
      message: "Order not found",
    });
  }

  // ✅ user fetch karo to get secret
  const user = await User.findOne({
    username: payment.to_user,
  }).lean();

  if (!user) {
    return NextResponse.json({
      success: false,
      message: "User not found",
    });
  }

  // ✅ signature verify
  const isValid = validatePaymentVerification(
    {
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
    },
    body.razorpay_signature,
    user.razorpaysecret
  );

  if (!isValid) {
    return NextResponse.json({
      success: false,
      message: "Payment verification failed",
    });
  }

  // 🔥 YAHAN done:true set hota hai
  await Payment.updateOne(
    { order_id: body.razorpay_order_id },
    { $set: { done: true } }
  );

  return NextResponse.json({ success: true });
};
