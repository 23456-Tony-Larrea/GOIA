import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AsignatureProjectsService {
    constructor(private prismaService: PrismaService ) {}
    async findAll(){
        return this.prismaService.asignatureProjects.findMany({
            include:{
                areaCharge:true,
                project:true,
                User:true
            }
        });
    }
    async findOne(id:number){
        return this.prismaService.asignatureProjects.findUnique({where:{id},
            include:{
                areaCharge:true,
                project:true,
                User:true
            }
        });
    }
    async create(data:any){
        await this.prismaService.asignatureProjects.create({data});
        return {message:'AsignatureProjects created successfully'};
    }
    async update(id:number,data:any){
        await this.prismaService.asignatureProjects.update({where:{id},data});
        return {message:'AsignatureProjects updated successfully'};
    }
    async remove(id:number){
        await this.prismaService.asignatureProjects.delete({where:{id}});
        return {message:'AsignatureProjects deleted successfully'};
    }

}
