import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionsModule } from './models/permissions/permissions.module';
import { PrismaService } from '../prisma/prisma.service';
import { PermissionsController } from './routes/permissions.controller';
import { PermissionsService } from './models/permissions/permissions.service';
import { RolesModule } from './models/roles/roles.module';
import { RolesPermisssionModule } from './models/roles_permission/roles_permisssion.module';
import { RolesPermissionController } from './routes/roles_permission.controller';
import { LoginRegisterService } from './controllers/auth/login-register.service';
import { LoginRegisterModule } from './controllers/auth/login-register.module';
import { LoginRegisterController } from './controllers/auth/login-register.controller';
import { UsersService } from './models/users/users.service';
import { UsersModule } from './models/users/users.module';
import { UsersController } from './routes/users.controller';
import { ChargeService } from './models/charge/charge.service';
import { ChargeModule } from './models/charge/charge.module';
import { DepartmentService } from './models/department/department.service';
import { DepartmentController } from './routes/department.controller';
import { DepartmentModule } from './models/department/department.module';
import { AreaChargeModule } from './models/area-charge/area-charge.module';
import { ProjectsController } from './routes/projects.controller';
import { ProjectsService } from './models/projects/projects.service';
import { ProjectsModule } from './models/projects/projects.module';
import { MaterialModule } from './models/material/material.module';
import { AreaChargeProjectsModule } from './models/area-charge_projects/area-charge_projects.module';
import { AreaChargeProjectsController } from './routes/area-charge_projects.controller';
import { AsignatureProjectsController } from './routes/asignature-projects.controller';
import { AsignatureProjectsModule } from './models/asignature-projects/asignature-projects.module';


@Module({
  imports: [PermissionsModule, RolesModule, RolesPermisssionModule, LoginRegisterModule, UsersModule, ChargeModule, DepartmentModule, AreaChargeModule, ProjectsModule, MaterialModule, AreaChargeProjectsModule, AsignatureProjectsModule],
  controllers: [AppController,PermissionsController, RolesPermissionController, LoginRegisterController,UsersController, DepartmentController, ProjectsController, AreaChargeProjectsController, AsignatureProjectsController],
  providers: [AppService, PrismaService,PermissionsService, LoginRegisterService, UsersService, ChargeService, DepartmentService, ProjectsService,],
})
export class AppModule {}