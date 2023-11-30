import Card from "@/components/base/Card";
import EventCard from "@/components/EventCard";
import SubTitle from "@/components/base/SubTitle";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";

const mockEvent = [
  { day: "01/12", subtitle: "Niver do gui", numberOfPeople: 12, total: 240 },
  { day: "01/02", subtitle: "Churras do gui", numberOfPeople: 12, total: 240 },
  { day: "15/12", subtitle: "Outra parada", numberOfPeople: 12, total: 240 },
  { day: "01/12", subtitle: "Irruuu", numberOfPeople: 12, total: 240 },
  { day: "01/12", subtitle: "Irruuu", numberOfPeople: 12, total: 240 },
  { day: "01/12", subtitle: "Irruuu", numberOfPeople: 12, total: 240 },
  { day: "01/12", subtitle: "Irruuu", numberOfPeople: 12, total: 240 },
  { day: "01/12", subtitle: "Irruuu", numberOfPeople: 12, total: 240 },
];
export default function Home() {
  return (
    <PageContainer pageName="Agenda Churras">
      <div className="grid grid-cols-2 mt-16">
        {mockEvent.map((event, index) => (
          <Link
            href={`/churras/${index}`}
            key={index}
            className="flex items-center justify-center"
          >
            <EventCard className="mb-5" {...event}></EventCard>
          </Link>
        ))}

        <Link
          href={`/churras/new`}
          className="flex items-center justify-center"
        >
          <Card className="mb-5 bg-[#F1F1F1] min-w-[290px] h-[190px] flex justify-center items-center flex-col">
            <div className="bg-[#FFD836] w-[90px] h-[90px] rounded-full flex justify-center items-center ">
              <Image
                src="/icons/icon_bbq.svg"
                alt="bbq Logo"
                width={40}
                height={44}
              />
            </div>
            <SubTitle className="mt-2">Adicionar Churras</SubTitle>
          </Card>
        </Link>
      </div>
    </PageContainer>
  );
}
