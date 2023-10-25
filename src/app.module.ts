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
import { LoginRegisterService } from './controllers/auth/login-register.service';
import { LoginRegisterModule } from './controllers/auth/login-register.module';
import { LoginRegisterController } from './controllers/auth/login-register.controller';
import { UsersService } from './models/users/users.service';
import { UsersModule } from './models/users/users.module';
import { UsersController } from './models/users/users.controller';
import { ChargeService } from './models/charge/charge.service';
import { ChargeModule } from './models/charge/charge.module';
import { DepartmentService } from './models/department/department.service';
import { DepartmentController } from './models/department/department.controller';
import { DepartmentModule } from './models/department/department.module';


@Module({
  imports: [PermissionsModule, RolesModule, RolesPermisssionModule, LoginRegisterModule, UsersModule, ChargeModule, DepartmentModule],
  controllers: [AppController,PermissionsController, RolesPermissionController, LoginRegisterController,UsersController, DepartmentController],
  providers: [AppService, PrismaService,PermissionsService, LoginRegisterService, UsersService, ChargeService, DepartmentService,],
})
export class AppModule {}