import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
import { find } from "lodash";

import JsonUsers from "@/../users.json";

type User = {
  login: string;
  password: string;
};

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        login: { label: "login", type: "text" },
        password: { label: "password", type: "text" },
      },

      async authorize(credentials, req) {
        const user = find(
          JsonUsers.users,
          (user: User) => user.login === credentials?.login
        );

        if (user?.password === credentials?.password)
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
