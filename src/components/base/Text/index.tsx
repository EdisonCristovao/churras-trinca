import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export default function Text({ children, className, ...rest }: TextProps) {
  return (
    <p className={`${className} font-medium text-xl`} {...rest}>
      {children}
    </p>
  );
}
