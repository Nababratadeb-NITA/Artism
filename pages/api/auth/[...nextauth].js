import NextAuth from "next-auth";
import { SanityAdapter } from "next-auth-sanity";
import googleProvider from "next-auth/providers/google";
import { client } from "../../../lib/client";
export const authOptions = {
  adapter: SanityAdapter(client),
  // Configure one or more authentication providers
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
export default NextAuth(authOptions);
