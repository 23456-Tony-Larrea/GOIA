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
import { UsersService } from './controllers/users/users.service';
import { UsersModule } from './controllers/users/users.module';
import { UsersController } from './controllers/users/users.controller';


@Module({
  imports: [PermissionsModule, RolesModule, RolesPermisssionModule, LoginRegisterModule, UsersModule],
  controllers: [AppController,PermissionsController, RolesPermissionController, LoginRegisterController,UsersController],
  providers: [AppService, PrismaService,PermissionsService, LoginRegisterService, UsersService,],
})
export class AppModule {}