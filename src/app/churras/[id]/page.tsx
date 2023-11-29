import Image from "next/image";

import Card from "@/components/card";
import SubTitle from "@/components/subTitle";
import Text from "@/components/text";
import Title from "@/components/title";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="bg-[#FAFAFA] h-screen">
      <div className="relative h-[200px] overflow-hidden">
        <Image
          className="absolute top-0 left-0 z-index-1 w-full bg-[#FFD836]"
          src="/bbq-pattern.svg"
          alt="bbq Logo"
          width={100}
          height={24}
        />
      </div>
      <main className="relative z-index-0 mt-[-140px] flex flex-col max-w-[650px] mx-auto">
        <h1 className="font-extrabold	text-3xl text-center">
          Agenda Churras {params.id}
        </h1>

        <Card className="w-[90%] mt-16">
          <div className="flex items-center justify-between">
            <Title>01/02</Title>
            <div className="flex mr-11">
              <Image
                className="mr-3"
                src="/icons/icon_people.svg"
                alt="bbq Logo"
                width={18}
                height={15}
              />
              <Text>15</Text>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Title>Niver do Gui</Title>
            <div className="flex">
              <Image
                className="mr-3"
                src="/icons/icon_money.svg"
                alt="bbq Logo"
                width={18}
                height={15}
              />
              <Text>R$ 240</Text>
            </div>
          </div>

          <div className="mt-10">
            <div>
              <div className="flex items-center justify-between">
                <SubTitle>Alice</SubTitle>
                <SubTitle>R$ 20,00</SubTitle>
              </div>
              <hr className="w-full bg-[#FFD836] my-2"></hr>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <SubTitle>Alice</SubTitle>
                <SubTitle>R$ 20,00</SubTitle>
              </div>
              <hr className="w-full bg-[#FFD836] my-2"></hr>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <SubTitle>Alice</SubTitle>
                <SubTitle>R$ 20,00</SubTitle>
              </div>
              <hr className="w-full bg-[#FFD836] my-2"></hr>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <SubTitle>Alice</SubTitle>
                <SubTitle>R$ 20,00</SubTitle>
              </div>
              <hr className="w-full bg-[#FFD836] my-2"></hr>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
