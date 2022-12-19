import NextAuth from "next-auth";
import { SanityAdapter } from "next-auth-sanity";
import googleProvider from "next-auth/providers/google";
import { client } from "../../../lib/client";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET !== "production",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client),
};
export default NextAuth(authOptions);
