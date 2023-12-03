"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import Image from "next/image";

import Input from "@/components/base/Input";
import Title from "@/components/base/Title";
import Button from "@/components/base/Button";

export default function Login() {
  const router = useRouter();
  const { control, handleSubmit } = useForm();

  const submitForm = async (data: any) => {
    const response = await signIn("credentials", {
      login: data.login,
      password: data.password,
      redirect: false,
    });

    if (response?.error) {
      toast.error("Usuário ou senha incorretos");
      return;
    }

    router.replace("/churras");
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
      <main
        className="relative z-index-0 pt-20 flex flex-col"
        onSubmit={handleSubmit(submitForm)}
      >
        <Title className="text-center">Agenda Churras</Title>
        <form className="flex flex-col mt-28 self-center w-[350px]">
          <div className="flex flex-col">
            <Input name="login" label="Login" control={control} />
            <Input
              name="password"
              label="Senha"
              control={control}
              type="password"
            />
            <Button className=" mt-8">Entrar</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
