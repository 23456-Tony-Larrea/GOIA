import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ProjectsService {
    constructor(private prismaService:PrismaService) {}
    async findAll(){
        return this.prismaService.project.findMany();
    }
    async findOne(id:number){
        return this.prismaService.project.findUnique({where:{id}});
    }
    async create(data:any){
        await this.prismaService.project.create({data});
        return {message:'Project created successfully'};
    }
    async update(id:number,data:any){
        await this.prismaService.project.update({where:{id},data});
        return {message:'Project updated successfully'};
    }
    async remove(id:number){
        await this.prismaService.project.delete({where:{id}});
        return {message:'Project deleted successfully'};
    }
    
}
