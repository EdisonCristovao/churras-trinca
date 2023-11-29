import { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export default function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={`${className} bg-white rounded-[8px] p-4 shadow-lg self-center `}
    >
      {children}
    </div>
  );
}
