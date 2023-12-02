import { Churras } from "@/types/churras";
import { find, map } from "lodash";

export const CHURRAS_LS_KEY = "CHURRAS_LIST";
class ChurrasService {
  addChurras(churras: Churras) {
    let churrasList = this.loadChurras();

    churrasList.push({ ...churras, people: [] });
    localStorage.setItem(CHURRAS_LS_KEY, JSON.stringify(churrasList));
  }

  loadChurras(): Churras[] {
    let churrasList = [];
    const churrasListString = localStorage.getItem(CHURRAS_LS_KEY);
    if (churrasListString) {
      churrasList = JSON.parse(churrasListString);
    }
    return churrasList;
  }

  remove(id: number) {
    let churrasList = this.loadChurras();

    const filteredChurrasListt = churrasList.filter(
      (_: Churras, index: Number) => id != index
    );

    localStorage.setItem(CHURRAS_LS_KEY, JSON.stringify(filteredChurrasListt));
  }

  getById(id: number): Churras | null {
    let churrasList = this.loadChurras();
    const churras: Churras | undefined = find(
      churrasList,
      (_: Churras, index: number) => index == id
    );
    if (!churras) return null;

    return churras;
  }

  update(newChurras: Churras, id: number) {
    let churrasList = this.loadChurras();

    const churrasListUpdated = map(churrasList, (churras, index) => {
      if (id == index) {
        return { ...newChurras };
      }
    });

    localStorage.setItem(CHURRAS_LS_KEY, JSON.stringify(churrasListUpdated));
  }
}
const churras = new ChurrasService();
export default churras;
