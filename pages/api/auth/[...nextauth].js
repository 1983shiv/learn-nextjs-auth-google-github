import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import User from "../../../models/User";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "asdcvbtjhm",
  },
  callbacks: {
    async jwt(token, user) {
      console.log("user from nextauth", user);
      if (user) {
        token.id = user.id;
        const newUser = {
          googleId: user?.id,
          displayName: user?.displayName || "",
          firstName: user?.name.givenName || "",
          lastName: user?.name.familyName || "",
          image: user?.photos[0].value || "",
        };
        try {
          let user = await User.findOne({ googleId: user.id });
          if (!user) {
            user = await User.create(newUser);
          }
        } catch (error) {
          console.log(
            "error occured during next auth registeration or login",
            err.message
          );
        }
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
});
