import { sumBy } from "lodash";

import { Person } from "@/types/person";
import Title from "../base/Title";
import SubTitle from "../base/SubTitle";
import Card from "../base/Card";
import Image from "next/image";
import Text from "../base/Text";

type CardProps = {
  className?: string;
  date: string;
  description: string;
  people: Person[];
  removeChurras: (e: any) => void;
};

export default function EventCard({
  date,
  description,
  people,
  className,
  removeChurras,
  ...rest
}: CardProps) {
  const total = sumBy(people, "contribution");
  return (
    <Card
      className={`${className} flex flex-col justify-between sm:min-w-[290px] min-w-[350px] h-[190px]`}
      {...rest}
    >
      <div>
        <div className="flex justify-between">
          <Title>{date}</Title>
          <Image
            onClick={removeChurras}
            src="/icons/trash.svg"
            alt="trash icon"
            width={18}
            height={15}
          />
        </div>
        <SubTitle>{description}</SubTitle>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <Image
            className="mr-3"
            src="/icons/icon_people.svg"
            alt="bbq Logo"
            width={18}
            height={15}
          />
          <Text>{people.length}</Text>
        </div>

        <div className="flex">
          <Image
            className="mr-3"
            src="/icons/icon_money.svg"
            alt="bbq Logo"
            width={18}
            height={15}
          />
          <Text>R${total}</Text>
        </div>
      </div>
    </Card>
  );
}
