"use client";
import { Control, useController } from "react-hook-form";

import SubTitle from "../SubTitle";
import { Churras } from "@/types/churras";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  control: Control<Churras>;
};

export default function Input({
  name,
  label,
  type = "text",
  control,
}: InputProps) {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({ name, control, defaultValue: "" });

  return (
    <div className="flex flex-col mb-5">
      <SubTitle className="text-xl font-bold mb-2">{label}</SubTitle>
      <input
        className="h-[50px] rounded-[18px] px-4 focus:outline-none border"
        ref={ref}
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      ></input>
    </div>
  );
}
