import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Raleway } from "next/font/google";
import { Metadata } from "next";
import Image from "next/image";

import { authOptions } from "../api/auth/[...nextauth]/route";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Churras",
  description: "",
};
export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        {children}

        <Image
          className="absolute bottom-10 left-0 right-0 mx-auto  "
          src="/trinca-logo.svg"
          alt="trinca Logo"
          width={60}
          height={60}
        />
      </body>
    </html>
  );
}
