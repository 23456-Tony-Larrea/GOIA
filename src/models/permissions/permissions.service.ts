import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PermissionsService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.permission.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.permission.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prismaService.permission.create({ data });
  }

  async update(id: number, data: any) {
    return this.prismaService.permission.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prismaService.permission.delete({ where: { id } });
  }
}
