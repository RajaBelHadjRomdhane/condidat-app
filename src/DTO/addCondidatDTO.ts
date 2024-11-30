import { IsString, IsEmail, IsArray, IsBoolean, IsNumber, IsOptional, IsIn, isNumber, IsNotEmpty } from 'class-validator';


export class CreateCondidatDTO {
  @IsString()
  @IsNotEmpty()
  id:string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
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
