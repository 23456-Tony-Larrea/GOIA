import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AreaChargeProjectsService {
    constructor(private prismaService:PrismaService) {}
    async findAll(){
        return this.prismaService.areaChargeToProject.findMany({
            include:{
                areaCharge:true,
                project:true
            }
        });
    }
    async findOne(id:number){
        return this.prismaService.areaChargeToProject.findUnique({where:{id},
            include:{
                areaCharge:true,
                project:true
            }
        });
    }
    async create(data:any){
        await this.prismaService.areaChargeToProject.create({data});
        return {message:'AreaChargeProjects created successfully'};
    }
    async update(id:number,data:any){
        await this.prismaService.areaChargeToProject.update({where:{id},data});
        return {message:'AreaChargeProjects updated successfully'};
    }
    async remove(id:number){
        await this.prismaService.areaChargeToProject.delete({where:{id}});
        return {message:'AreaChargeProjects deleted successfully'};
    }
}
