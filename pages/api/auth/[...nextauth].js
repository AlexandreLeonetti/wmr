import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

export default NextAuth({
//    adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    TwitterProvider({
         clientId: process.env.TWITTER_CLIENT_ID,
         clientSecret: process.env.TWITTER_CLIENT_SECRET,
         version: '2.0',
    }),
    GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })

    // ...add more providers here
  ],
secret: process.env.NEXTAUTH_SECRET,


})
