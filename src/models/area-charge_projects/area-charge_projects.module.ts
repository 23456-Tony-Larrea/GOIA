import { Module } from '@nestjs/common';
import { AreaChargeProjectsService } from './area-charge_projects.service';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  providers: [AreaChargeProjectsService,PrismaService ],
  exports: [AreaChargeProjectsService],
})
export class AreaChargeProjectsModule {}
