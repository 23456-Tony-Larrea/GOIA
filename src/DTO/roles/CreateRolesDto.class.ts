import { IsString, IsArray  } from 'class-validator';

export class CreateRolesDto {
  @IsString()
  name: string;
}
