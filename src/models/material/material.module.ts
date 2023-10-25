import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from '../../routes/material.controller';
import { PrismaService } from '../../../prisma/prisma.service'; // Asegúrate de importar PrismaService correctamente

@Module({
  controllers: [MaterialController],
  providers: [MaterialService,PrismaService]
})
export class MaterialModule {}
