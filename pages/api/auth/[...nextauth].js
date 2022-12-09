import NextAuth from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import googleProvider from "next-auth/providers/google";
import { client } from "../../../lib/client";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client),
};
export default NextAuth(authOptions);
