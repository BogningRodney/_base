import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

const googleId = process.env.GOOGLE_ID;
const googleSecret = process.env.GOOGLE_SECRET;

if (!githubId || !githubSecret || !googleId || !googleSecret) {
  throw new Error("Missing environment variables for authentification");
}

export const authConfig = {
  providers: [
    Credentials({
            
      credentials: {
          email: { label: "Email", type: "email", placeholder: "Email"},
          password: { label: "Password", type: "password", placeholder: "Password"}
      },

      async authorize(credentials) {

          let user = null
          
          // validate credentials
          
          // get user

          user = {
              id: "",
              name: "Neyrod",
              email: "neyrod@gmail.com"
          }

          if(!user){

              console.log("Invalis credentials")

              return null
          }


          return user
      }
  }),
    GitHubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),

  ],
  adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions;

export default NextAuth(authConfig);
