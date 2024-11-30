import { IsString, IsEmail, IsArray, IsBoolean, IsNumber, IsOptional, IsIn, isNumber, IsNotEmpty } from 'class-validator';


export class UpdateCondidatDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsArray()
  @IsString({ each: true })
  skills: string[];

  @IsString()
  @IsIn(['En attente','Rejeté', 'Accepté',])
  statuts:string;

  @IsBoolean()
  recruited: boolean;

  @IsNumber()
  @IsOptional()
  recruitmentYear?: number;
}
