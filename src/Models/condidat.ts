import { CreateCondidatDTO } from "src/DTO/addCondidatDTO";

export class Candidat  {
  // id: string;
  // name: string;
  // email: string;
  // skills: string[];
  // status:string;
  // recruited: boolean;
  // recruitmentYear?: number;
  
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public skills: string [],
    public statuts: string,
    public recruited: boolean,
    public recruitmentYear?: number
  ) {}
}

