import Title from "../title";
import SubTitle from "../subTitle";
import Card from "../card";
import Image from "next/image";
import Text from "../text";

type CardProps = {
  className?: string;
  day: string;
  subtitle: string;
  numberOfPeople: number;
  total: number;
};

export default function EventCard({
  day,
  subtitle,
  numberOfPeople,
  total,
  className,
  ...rest
}: CardProps) {
  return (
    <Card
      className={`${className} flex flex-col justify-between min-w-[290px] h-[190px]`}
      {...rest}
    >
      <div>
        <Title>{day}</Title>
        <SubTitle>{subtitle}</SubTitle>
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
          <Text>{numberOfPeople}</Text>
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
