import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, Res,Req} from '@nestjs/common';
import { CandidatsService } from './candidats.service';
import { Candidat } from 'src/Models/condidat';
import { CreateCondidatDTO } from 'src/DTO/addCondidatDTO';
import { v4 as uuidv4 } from 'uuid';
import { throwDeprecation } from 'process';
import { UpdateCondidatDTO } from 'src/DTO/updateCondidatDTO';


@Controller('candidats')
export class CandidatsController {
    constructor(private readonly candidatsService : CandidatsService){}
    
    @Get()
    getAll(){
        return this.candidatsService.getAll();
    }
    @Get(':id')
    getCondidat(@Param('id') ConId ) {
       return this.candidatsService.getCandidatById(ConId)
      
    }
    


     @Post('add')
    createCandidat(@Body() body) {
        return this.candidatsService.addCondidat(body)
    
      
    }
  
  
    @Put('update/:id')
    updateCandidat(@Param('id') id: string, @Body() updatedCandidat) {
     return  this.candidatsService.updateCandidat(id, updatedCandidat);
     
    }
  
    @Delete('del/:id')
    deleteCandidat(@Param('id') id: string) {
        return  this.candidatsService.deleteCandidat(id);
     
    }
  
    @Get('by-year')
    getCandidatsByYear(@Query('year') year: number) {
      return this.candidatsService.getCandidatsByYear(year);
    }
  
    @Get('by-years-range')
    getCandidatsByYearsRange(
      @Query('startYear') startYear: number,
      @Query('endYear') endYear: number,
    ) {
      return this.candidatsService.getCandidatsByYearsRange(startYear, endYear);
    }







    
}
