
import { IsString } from 'class-validator';
export class UpdatePermissionDto {
    @IsString()
    name: string;
  }