import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class MaterialService {
    constructor(private prismaService:PrismaService) {}
    async findAll(){
        return this.prismaService.material.findMany();
    }
    async findOne(id:number){
        return this.prismaService.material.findUnique({where:{id}});
    }
    async create(data:any){
        await this.prismaService.material.create({data});
        return {message:'Material created successfully'};
    }
    async update(id:number,data:any){
        await this.prismaService.material.update({where:{id},data});
        return {message:'Material updated successfully'};
    }
    async remove(id:number){
        await this.prismaService.material.delete({where:{id}});
        return {message:'Material deleted successfully'};
    }
}
