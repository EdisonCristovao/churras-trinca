"use client";
import Link from "next/link";

import EventCard from "@/components/EventCard";
import PageContainer from "@/components/PageContainer";
import AddChurras from "@/components/AddChurras";
import { useEffect, useState } from "react";
import { Churras } from "@/types/churras";
import { useRouter } from "next/navigation";

export default function Home() {
  const [churrasList, setChurrasList] = useState<any>(null);
  const router = useRouter();

  const loadData = () => {
    let churrasList = [];
    const churrasListString = localStorage.getItem("churrasList");
    console.log(churrasListString);
    if (churrasListString) {
      churrasList = JSON.parse(churrasListString);
    }
    setChurrasList(churrasList);
  };
  useEffect(() => {
    loadData();
  }, []);

  const handleFormSubmit = (data: any) => {
    let churrasList = [];
    const churrasListString = localStorage.getItem("churrasList");
    console.log(churrasListString);
    if (churrasListString) {
      churrasList = JSON.parse(churrasListString);
    }

    churrasList.push({ ...data, people: [] });
    localStorage.setItem("churrasList", JSON.stringify(churrasList));

    router.push(`/churras/${churrasList.length - 1}`);
  };

  const removeChurras = (e, id: number) => {
    e.preventDefault();
    const filteredChurrasListt = churrasList.filter(
      (_: Churras, index: Number) => id != index
    );

    localStorage.setItem("churrasList", JSON.stringify(filteredChurrasListt));
    loadData();
  };

  return (
    <PageContainer pageName="Agenda Churras">
      <div className="grid grid-cols-2 mt-16">
        {churrasList?.map((churras: Churras, index: number) => (
          <Link
            href={`/churras/${index}`}
            key={index}
            className="flex items-center justify-center"
          >
            <EventCard
              className="mb-5"
              {...churras}
              removeChurras={(e) => removeChurras(e, index)}
            ></EventCard>
          </Link>
        ))}

        <AddChurras handleFormSubmit={handleFormSubmit} />
      </div>
    </PageContainer>
  );
}
