
import { IsString } from 'class-validator';
export class RegisterDto {
    @IsString() 
    email:String
    @IsString() 
    name: string;
    @IsString()
    password: string;
  }