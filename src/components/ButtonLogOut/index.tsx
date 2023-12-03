"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ButtonLogout() {
  const router = useRouter();

  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace("/");
  }

  return (
    <p className="cursor-pointer hover:underline text-center" onClick={logout}>
      Sign out
    </p>
  );
}
