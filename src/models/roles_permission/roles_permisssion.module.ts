import { Module } from '@nestjs/common';
import { RolesPermissionService } from './roles_permission.service';

@Module({
  providers: [RolesPermissionService]
})
export class RolesPermisssionModule {}
