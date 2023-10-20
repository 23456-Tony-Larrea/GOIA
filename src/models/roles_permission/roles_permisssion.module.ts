import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { RolesPermissionService } from './roles_permission.service';

@Module({
  providers: [RolesPermissionService, PrismaService],
  exports: [RolesPermissionService],
})
export class RolesPermisssionModule {}