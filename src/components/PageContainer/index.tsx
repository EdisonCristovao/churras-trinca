import { ReactNode } from "react";
import Image from "next/image";

import ButtonLogout from "../ButtonLogOut";

type PageContainerProps = {
  children: ReactNode;
  pageName: string;
};

export default function PageContainer({
  children,
  pageName,
  ...rest
}: PageContainerProps) {
  return (
    <div className="bg-[#FAFAFA] h-screen" {...rest}>
      <div className="relative h-[200px] overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full bg-[#FFD836] "
          src="/bbq-pattern.svg"
          alt="bbq Logo"
          width={100}
          height={24}
        />
      </div>
      <main className="relative z-10 mt-[-140px] flex flex-col max-w-[650px] mx-auto">
        <h1 className="font-extrabold	text-3xl text-center">{pageName}</h1>
        {/* <ButtonLogout /> */}
        {children}
      </main>
    </div>
  );
}
