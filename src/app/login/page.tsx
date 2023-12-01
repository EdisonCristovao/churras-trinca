"use client";

import Input from "@/components/base/Input";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Title from "@/components/base/Title";
import Button from "@/components/base/Button";

export default function Login() {
  const router = useRouter();

  const submitForm = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="bg-[#FFD836] h-screen">
      <div className="relative">
        <Image
          className="w-full absolute top-0 left-0 z-index-1"
          src="/bbq-pattern.svg"
          alt="bbq Logo"
          width={100}
          height={24}
        />
        <div className="absolute inset-0 gradient-overlay bg-[#FFD836] z-index-0 h-[333px]"></div>
      </div>
      <main className="relative z-index-0 pt-20 flex flex-col">
        <Title className="text-center">Agenda Churras</Title>
        <form action="" className="flex flex-col mt-28 self-center w-[350px]">
          <div className="flex flex-col">
            <Input name="login" label="Login" />
            <Input name="password" label="Senha" />
            <Button className=" mt-8" onClick={submitForm}>
              Entrar
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
