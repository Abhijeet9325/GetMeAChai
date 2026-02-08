import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import User from "@/app/models/User"
import Payment from "@/app/models/Payment"
 // connect to the database (MongoDB)
import connectDB from "@/db/connectDB"


export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        await connectDB()
        // check if the user already exists in the database
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0]
          })
        }
        return true;
      }
    },
    async session({ session, token, user }) {
      await connectDB()
      const dbUser = await User.findOne({ email: session.user.email })
      if (dbUser) {
        session.user.name = dbUser.username
      }
      
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }