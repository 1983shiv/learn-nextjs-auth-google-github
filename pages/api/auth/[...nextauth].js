import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.image = token.image;
      session.user.email = token.email;
      return session;
    },
  },
});
