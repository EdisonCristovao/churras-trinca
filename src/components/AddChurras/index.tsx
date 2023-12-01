"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Card from "../base/Card";
import SubTitle from "../base/SubTitle";
import Modal from "../base/Modal";
import Input from "../base/Input";
import Title from "../base/Title";
import Button from "../base/Button";
import { Churras } from "@/types/churras";

export default function AddChurras({ handleFormSubmit }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<Churras>({
    mode: "onChange",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (data: any) => {
    handleFormSubmit(data);
    closeModal();
    reset();
  };

  return (
    <div className="flex items-center justify-center" onClick={openModal}>
      <Card className="mb-5 bg-[#F1F1F1] min-w-[290px] h-[190px] flex justify-center items-center flex-col">
        <div className="bg-[#FFD836] w-[90px] h-[90px] rounded-full flex justify-center items-center ">
          <Image
            src="/icons/icon_bbq.svg"
            alt="bbq Logo"
            width={40}
            height={44}
          />
        </div>
        <SubTitle className="mt-2">Adicionar Churras</SubTitle>
      </Card>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Title className="mb-3">Adicionar Churras</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome do Churras"
            name="churras_name"
            control={control}
          />
          <Input label="Data" name="date" control={control} />
          <Input label="Descrição" name="description" control={control} />
          <Input label="Observação" name="observation" control={control} />
          <Button className=" mt-8">Salvar</Button>
        </form>
      </Modal>
    </div>
  );
}
