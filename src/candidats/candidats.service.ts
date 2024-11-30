import { Injectable, NotFoundException,BadRequestException } from '@nestjs/common';
import { Candidat} from 'src/Models/condidat';
import { CreateCondidatDTO } from 'src/DTO/addCondidatDTO';
import { UpdateCondidatDTO } from 'src/DTO/updateCondidatDTO';
@Injectable()
export class CandidatsService {


  // private candidats: CreateCondidatDTO[] = [
  //   { id:'789fzo',
  //     name: 'raja',
  //     email: "belhad@gmail.com",
  //     skills: ["arabic"],
  //     statuts: 'En attente',
  //     recruited: false, 
  //   },
  //   { id:'789ezo',
  //   name: 'aziz',
  //   email: "aziz@gmail.com",
  //   skills: ["Express"],
  //   statuts: 'En attente',
  //   recruited: false, 
  // },
  // ];
  private candidats : Candidat[] = [];

  getAll(){
    return this.candidats;
}

  getCandidatById(id: string) {
    const oneCond = this.candidats.find(p => p.id ===id );
    if (!oneCond) {
      throw new NotFoundException(`Il n\'ya pas un conditat avec cet id : ${id} `)
    } else {
      return oneCond
    }
  }

  updateCandidat(id: string, updatedCandidat: UpdateCondidatDTO) {
    const conf = this.candidats.findIndex(candidat => candidat.id === id);
    if( conf == -1){
      throw new NotFoundException(`Candidats With ID : ${id} Not Found`);
  }else{
    this.candidats[conf] = { ...this.candidats[conf], ...updatedCandidat };
          return this.candidats[conf];
  }
  }

  deleteCandidat(id: string) {
    const conf = this.candidats.findIndex(candidat => candidat.id === id);
    if( conf == -1){
      throw new NotFoundException(`Candidats With ID : ${id} Not Found`);
  }
  else{
      this.candidats.splice( conf, 1);
      return console.log(`Candidat with ID ${id} deleted successfully`);
  }
  }
  addCondidat(condidat : CreateCondidatDTO){
    const candidatExit = this.candidats.find(p => p.id === condidat.id);
    if(candidatExit){
      throw new NotFoundException(`Candidat With ID : ${condidat.id} Already Exists`);
  }else{
    this.candidats.push(condidat);
    return { message: `Candidat with ID ${condidat.id} added successfully`, condidat };
}

  }

  getCandidatsByYear(year: number): Candidat[] {
    return this.candidats.filter(candidat => candidat.recruitmentYear === year);
  }

  getCandidatsByYearsRange(startYear: number, endYear: number): Candidat[] {
    return this.candidats.filter(candidat => candidat.recruitmentYear >= startYear && candidat.recruitmentYear <= endYear);
  }
   




}


