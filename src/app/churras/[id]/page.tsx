"use client";
import { useCallback, useEffect, useState } from "react";
import { map, sortBy, sumBy } from "lodash";
import Image from "next/image";

import Card from "@/components/base/Card";
import SubTitle from "@/components/base/SubTitle";
import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import Checkbox from "@/components/base/Checkbox";
import PageContainer from "@/components/PageContainer";
import { Churras } from "@/types/churras";
import ChurrasService from "@/service/churras";
import Input from "@/components/base/Input";
import { useForm } from "react-hook-form";
import { Person } from "@/types/person";
import PersonService from "@/service/person";

export default function Page({ params }: { params: { id: number } }) {
  const [churras, setChurras] = useState<Churras>();
  const { control, handleSubmit, reset } = useForm();

  const loadData = useCallback(() => {
    const churras = ChurrasService.getById(params.id);
    if (!churras) return;
    setChurras(churras);
  }, [params.id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onSubmit = (data: Person) => {
    PersonService.add(params.id, data);
    loadData();
    reset();
  };

  const removePerson = (index: number) => {
    PersonService.remove(params.id, index);
    loadData();
  };

  const handleIsPaidClick = (person: Person, index: number) => {
    person.isPaid = !person.isPaid;
    PersonService.update(params.id, index, person);
    loadData();
  };

  const total = sumBy(churras?.people, "contribution");

  return (
    <PageContainer pageName="Agenda Churras">
      <Card className="w-[90%] mt-16">
        <div className="flex items-center justify-between">
          <Title>{churras?.date}</Title>
          <div className="flex w-24">
            <Image
              className="mr-3"
              src="/icons/icon_people.svg"
              alt="bbq Logo"
              width={18}
              height={15}
            />
            <Text>{churras?.people.length}</Text>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Title>{churras?.churras_name}</Title>
          <div className="flex w-24">
            <Image
              className="mr-3"
              src="/icons/icon_money.svg"
              alt="bbq Logo"
              width={18}
              height={15}
            />
            <Text>R$ {total}</Text>
          </div>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-between">
              <Input
                className="mb-0 w-full mr-2"
                inputClassName="my-0 px-2 h-[40px] text-sm"
                name="name"
                hasLabel={false}
                control={control}
                placeholder="Nome"
              />
              <Input
                className="mb-0"
                inputClassName="my-0 px-2 h-[40px] text-sm"
                name="contribution"
                hasLabel={false}
                control={control}
                placeholder="Valor"
              />{" "}
              <input type="submit" hidden />
            </div>
            <hr className="w-full bg-[#FFD836] my-2"></hr>
          </form>

          {map(churras?.people, (person: Person, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Checkbox
                    className="mr-3"
                    value={person.isPaid}
                    onClick={() => handleIsPaidClick(person, index)}
                  ></Checkbox>
                  <SubTitle>{person.name}</SubTitle>
                </div>
                <div className="flex">
                  <SubTitle
                    data-isPaid={person.isPaid}
                    className="data-[isPaid=true]:line-through	"
                  >
                    R$ {person.contribution}
                  </SubTitle>
                  <Image
                    className="mx-2 cursor-pointer"
                    onClick={() => removePerson(index)}
                    src="/icons/trash.svg"
                    alt="trash icon"
                    width={18}
                    height={15}
                  />
                </div>
              </div>
              <hr className="w-full bg-[#FFD836] my-2"></hr>
            </div>
          ))}
        </div>
      </Card>
    </PageContainer>
  );
}
