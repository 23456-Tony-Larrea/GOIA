import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class RolesService {
    constructor(private prismaService: PrismaService) {}
    
    async findAll() {
        return this.prismaService.role.findMany();
    }
    
    async findOne(id: number) {
        return this.prismaService.role.findUnique({ where: { id } });
    }
    
    async create(data: any) {
        await this.prismaService.role.create({ data });
        return { message: 'Role created successfully'};
    }
    
    async update(id: number, data: any) {
        await this.prismaService.role.update({ where: { id }, data });
        return { message: 'Role updated successfully' };
    }
    
    async remove(id: number) {
        await this.prismaService.role.delete({ where: { id } });
        return { message: 'Role deleted successfully' };
    }

}
