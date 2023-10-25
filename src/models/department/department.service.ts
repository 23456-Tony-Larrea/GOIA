import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class DepartmentService {
    constructor(private prismaService:PrismaService) {}
    async findAll(){
        return this.prismaService.department.findMany();
    }
    async findOne(id:number){
        return this.prismaService.department.findUnique({where:{id}});
    }
    async create(data:any){
        const newDepartment=await this.prismaService.department.create({data});
        return {message:'Department created successfully'};
    }
    async update(id:number,data:any){
        await this.prismaService.department.update({where:{id},data});
        return {message:'Department updated successfully'};
    }
    async remove(id:number){
        await this.prismaService.department.delete({where:{id}});
        return {message:'Department deleted successfully'};
    }
    //change state the true and false
    async changeState(id:number){
        const department=await this.prismaService.department.findUnique({where:{id}});
        if(department.state){
            await this.prismaService.department.update({where:{id},data:{state:false}});
            return {message:'Department disabled successfully'};
        }else{
            await this.prismaService.department.update({where:{id},data:{state:true}});
            return {message:'Department enabled successfully'};
        }
    }
}
