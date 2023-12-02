import ChurrasService from "@/service/churras";
import { Churras } from "@/types/churras";
import { Person } from "@/types/person";
import { filter, map, sortBy } from "lodash";
class PersonService {
  add(churrasId: number, data: Person) {
    const churras = ChurrasService.getById(churrasId);

    if (!churras) return;

    const person: Person = { ...data, isPaid: false };
    churras.people?.push({
      ...person,
      contribution: Number(data.contribution),
    });
    churras.people = sortBy(churras?.people, "name");

    ChurrasService.update(churras, churrasId);
  }

  remove(churrasId: number, id: number) {
    const churras = ChurrasService.getById(churrasId);
    if (!churras) return;

    churras.people = filter(churras.people, (_, index) => index != id);

    ChurrasService.update(churras, churrasId);
  }

  update(churrasId: number, id: number, data: Person) {
    const churras = ChurrasService.getById(churrasId);

    if (!churras) return;

    const people = churras.people.map((person: any, index: number) => {
      if (index == id) return { ...data };
      return { ...churras };
    });

    churras.people = people as Person[];

    ChurrasService.update(churras, churrasId);
  }
}

const Person = new PersonService();
export default Person;
