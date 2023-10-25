import { Module } from '@nestjs/common';
import { AsignatureProjectsService } from './asignature-projects.service';
import { PrismaService } from '../../../prisma/prisma.service'; // Asegúrate de importar PrismaService correctamente


@Module({
  providers: [AsignatureProjectsService,PrismaService],
  exports: [AsignatureProjectsService],
})
export class AsignatureProjectsModule {}