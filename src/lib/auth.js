import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";


const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("docappointdb");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        },

      },
    //   advanced: {
    //     trustedOrigins: [
    //         "https://docappoint-client-lyart.vercel.app",
    //         "https://docappoint-client-97w92lbjc-farjana-akters-projects.vercel.app"
    //     ]
    // },

       session : {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      //max 7days
      maxAge: 40 * 24 * 60 * 60
    }
  },
  plugins: [
    jwt()
  ]
});