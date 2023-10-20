import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionsModule } from './models/permissions/permissions.module';
import { PrismaService } from '../prisma/prisma.service';
import { PermissionsController } from './models/permissions/permissions.controller';
import { PermissionsService } from './models/permissions/permissions.service';
import { RolesModule } from './models/roles/roles.module';
import { RolesPermisssionModule } from './models/roles_permission/roles_permisssion.module';
import { RolesPermissionController } from './models/roles_permission/roles_permission.controller';

@Module({
  imports: [PermissionsModule, RolesModule, RolesPermisssionModule],
  controllers: [AppController,PermissionsController, RolesPermissionController],
  providers: [AppService, PrismaService,PermissionsService],
})
export class AppModule {}