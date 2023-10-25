import { Module } from '@nestjs/common';
import { ChargeController } from './charge.controller';
import { ChargeService } from './charge.service';
import { PrismaService } from '../../../prisma/prisma.service'; // Asegúrate de importar PrismaService correctamente

@Module({
  controllers: [ChargeController]
  ,providers: [ChargeService,PrismaService]
})
export class ChargeModule {}
