import { Module } from '@nestjs/common';
import { AreaChargeService } from './area-charge.service';
import { AreaChargeController } from '../../routes/area-charge.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [AreaChargeController],
  providers: [AreaChargeService,PrismaService]
})
export class AreaChargeModule {}
