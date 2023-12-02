import { ReactNode } from "react";

type SubTitleProps = {
  children: string | ReactNode;
  className?: string;
};

export default function SubTitle({
  children,
  className,
  ...rest
}: SubTitleProps) {
  return (
    <h1 className={`${className} text-xl font-bold`} {...rest}>
      {children}
    </h1>
  );
}
