import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        login: { label: "login", type: "text" },
        password: { label: "password", type: "text" },
      },

      async authorize(credentials, req) {
        if (credentials?.login === "Edison")
          return new Promise((resolve) => resolve(credentials as any));

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
