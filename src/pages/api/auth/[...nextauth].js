import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../util/mongo"

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
  providers: [
    //Neyle giriş yapmak istiyorsak onun provider kısmını next-auth'dan bakıp alabiliriz.

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages:{
    signIn: "/login"
  }
});
