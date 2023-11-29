import EventCard from "@/components/eventCard";
import Image from "next/image";
import Link from "next/link";

const mockEvent = [
  { day: "01/12", subtitle: "Niver do gui", numberOfPeople: 12, total: 240 },
  { day: "01/02", subtitle: "Churras do gui", numberOfPeople: 12, total: 240 },
  { day: "15/12", subtitle: "Outra parada", numberOfPeople: 12, total: 240 },
  { day: "01/12", subtitle: "Irruuu", numberOfPeople: 12, total: 240 },
];
export default function Home() {
  return (
    <div className="bg-[#FAFAFA] h-screen">
      <div className="relative h-[200px] overflow-hidden">
        <Image
          className="absolute top-0 left-0 z-index-1 w-full bg-[#FFD836] "
          src="/bbq-pattern.svg"
          alt="bbq Logo"
          width={100}
          height={24}
        />
      </div>
      <main className="relative z-index-0 mt-[-140px] flex flex-col max-w-[650px] mx-auto">
        <h1 className="font-extrabold	text-3xl text-center">Agenda Churras</h1>
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
        </div>
      </main>
    </div>
  );
}
