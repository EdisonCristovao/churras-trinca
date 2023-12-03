"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import EventCard from "@/components/ChurrasCard";
import AddChurras from "@/components/AddChurras";
import ChurrasService from "@/service/churras";
import { Churras } from "@/types/churras";
import { toast } from "react-toastify";

export default function Churras() {
  const [churrasList, setChurrasList] = useState<any>(null);
  const router = useRouter();

  const loadData = () => {
    const churras = ChurrasService.loadChurras();
    setChurrasList(churras);
  };
  useEffect(() => {
    loadData();
  }, []);

  const handleFormSubmit = (data: Churras) => {
    ChurrasService.addChurras(data);
    toast.success("Churrasquin cadastrado com sucesso");
    router.push(`/churras/${churrasList.length}`);
  };

  const removeChurras = (e: any, id: number) => {
    e.preventDefault();
    ChurrasService.remove(id);
    loadData();
  };

  return (
    <PageContainer pageName="Agenda Churras">
      <div className="grid sm:grid-cols-2 grid-cols-1 mt-16">
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
