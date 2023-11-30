import Image from "next/image";

import Card from "@/components/base/Card";
import SubTitle from "@/components/base/SubTitle";
import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import Checkbox from "@/components/base/Checkbox";
import PageContainer from "@/components/PageContainer";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <PageContainer pageName="Agenda Churras">
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
              <div className="flex">
                <Checkbox className="mr-3"></Checkbox>
                <SubTitle>Alice</SubTitle>
              </div>{" "}
              <SubTitle>R$ 20,00</SubTitle>
            </div>
            <hr className="w-full bg-[#FFD836] my-2"></hr>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <div className="flex">
                <Checkbox className="mr-3"></Checkbox>
                <SubTitle>Alice</SubTitle>
              </div>
              <SubTitle>R$ 20,00</SubTitle>
            </div>
            <hr className="w-full bg-[#FFD836] my-2"></hr>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex">
                <Checkbox className="mr-3"></Checkbox>
                <SubTitle>Alice</SubTitle>
              </div>{" "}
              <SubTitle>R$ 20,00</SubTitle>
            </div>
            <hr className="w-full bg-[#FFD836] my-2"></hr>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex">
                <Checkbox className="mr-3"></Checkbox>
                <SubTitle>Alice</SubTitle>
              </div>{" "}
              <SubTitle>R$ 20,00</SubTitle>
            </div>
            <hr className="w-full bg-[#FFD836] my-2"></hr>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
}
