import { ToastContainer } from "react-toastify";
import { Raleway } from "next/font/google";
import { Metadata } from "next";

import NextAuthProvider from "@/providers/nextAuthProvider";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Churras-Trinca",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <NextAuthProvider>{children}</NextAuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
