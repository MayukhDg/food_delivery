import dbConnect from "@/constants/dbConnect";


import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import User from "@/models/User";




const handler  = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
        }),
      ],

      callbacks:{
        async session({ session}) {
          const sessionUser = await User.findOne({ email: session.user.email });
          session.user.id = sessionUser._id.toString();      
      
          
            return session
          },
          async signIn({ account, profile, user, credentials }) {
            try {
              await dbConnect();
      
              // check if user already exists
              const userExists = await User.findOne({ email: profile.email });
      
              // if not, create a new document and save user in MongoDB
              if (!userExists) {
                await User.create({
                  email: profile.email,
                  username: profile.name.replace(" ", "").toLowerCase(),
                  image: profile.picture,
                });
              }
      
              return true
            } catch (error) {
              console.log("Error checking if user exists: ", error.message);
              return false
            }
          },
      }

      
})



export { handler as GET, handler as POST }