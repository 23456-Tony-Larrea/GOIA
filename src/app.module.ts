import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionsModule } from './models/permissions/permissions.module';
import { PrismaService } from '../prisma/prisma.service';
import { PermissionsController } from './models/permissions/permissions.controller';
import { PermissionsService } from './models/permissions/permissions.service';

@Module({
  imports: [PermissionsModule],
  controllers: [AppController,PermissionsController],
  providers: [AppService, PrismaService,PermissionsService],
})
export class AppModule {}