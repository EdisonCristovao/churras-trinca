import { ReactNode } from "react";

type TitleProps = {
  children: string | ReactNode;
  className?: string;
};

export default function Title({ children, className, ...rest }: TitleProps) {
  return (
    <h1 className={`${className} font-extrabold text-3xl`} {...rest}>
      {children}
    </h1>
  );
}
