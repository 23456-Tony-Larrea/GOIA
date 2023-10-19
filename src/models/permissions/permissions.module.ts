import { Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { PrismaService } from '../../../prisma/prisma.service'; // Asegúrate de importar PrismaService correctamente

@Module({
  controllers: [PermissionsController],
  providers: [PermissionsService, PrismaService], // Agrega PrismaService a la lista de providers
})
export class PermissionsModule {}

 