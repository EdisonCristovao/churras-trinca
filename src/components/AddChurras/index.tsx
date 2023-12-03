"use client";

import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";

import Card from "../base/Card";
import SubTitle from "../base/SubTitle";
import Modal from "../base/Modal";
import Input from "../base/Input";
import Title from "../base/Title";
import Button from "../base/Button";
import { churrasSchema } from "@/types/churras";

export default function AddChurras({ handleFormSubmit }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(churrasSchema),
    mode: "onChange",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data: any) => {
    handleFormSubmit(data);
    closeModal();
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

          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <InputMask
                mask="99/99/9999"
                maskChar={null}
                value={field.value}
                onChange={field.onChange}
              >
                {(inputProps: any) => (
                  <div className={`flex flex-col mb-5`}>
                    <SubTitle className="text-xl font-bold mb-2">Data</SubTitle>
                    <input
                      data-hasError={!!errors.date}
                      className="h-[50px] rounded-[18px] px-5 focus:outline-none border data-[hasError=true]:border-red-500 data-[hasError=false]:border"
                      {...inputProps}
                    ></input>
                  </div>
                )}
              </InputMask>
            )}
          />

          <Input label="Descrição" name="description" control={control} />
          <Input label="Observação" name="observation" control={control} />
          <div className="flex gap-2 w-full justify-between">
            <Input
              className="w-full"
              label="Valor com bebida"
              name="openValue"
              control={control}
              type="number"
            />
            <Input
              className="w-full"
              label="Valor Sem bebida"
              name="notOpenValue"
              control={control}
              type="number"
            />
          </div>
          <Button className=" mt-8">Salvar</Button>
        </form>
      </Modal>
    </div>
  );
}
