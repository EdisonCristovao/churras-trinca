"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function ArrowBack() {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.back()}
      className="cursor-pointer absolute left-0 top-2"
      src="/icons/arrow-back.svg"
      alt="bbq Logo"
      width={20}
      height={24}
    />
  );
}
