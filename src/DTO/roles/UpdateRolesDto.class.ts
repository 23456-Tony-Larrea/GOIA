
import { IsString } from 'class-validator';
export class UpdateRolesDto {
    @IsString()
    name: string;
  }