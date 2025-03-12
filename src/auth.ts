import NextAuth from "next-auth"
import prisma from "./lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    theme: {
        logo: "/logo.png",
        colorScheme: "light",
    },
    adapter: PrismaAdapter(prisma),
  providers: [Google, Github],
})