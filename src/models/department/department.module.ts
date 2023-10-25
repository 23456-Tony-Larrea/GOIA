import { Module } from '@nestjs/common';
import { DepartmentController } from '../../routes/department.controller';
import { DepartmentService } from './department.service';
import { PrismaService } from '../../../prisma/prisma.service'; // Asegúrate de importar PrismaService correctamente

@Module({})
export class DepartmentModule {
    controllers: [DepartmentController];
    providers: [DepartmentService, PrismaService];
}
