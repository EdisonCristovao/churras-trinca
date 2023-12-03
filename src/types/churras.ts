import { date, number, object, string, array } from "yup";
import { Person } from "./person";

export declare type Churras = {
  churras_name: string;
  description: string;
  observation: string;
  date: string;
  openValue: number;
  notOpenValue: number;

  people: Person[];
};

export const churrasSchema = object({
  churras_name: string().required(),
  description: string(),
  observation: string(),
  date: string().length(10).required(),
  openValue: number().required().positive(),
  notOpenValue: number().required().positive(),

  people: array(),
});
