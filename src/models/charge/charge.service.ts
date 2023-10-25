import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ChargeService {
    constructor(private prismaService:PrismaService) {}
    async findAll(){
        return this.prismaService.charge.findMany();
    }
    async findOne(id:number){
        return this.prismaService.charge.findUnique({where:{id}});
    }
    async create(data:any){
        const newCharge=await this.prismaService.charge.create({data});
        return {message:'Charge created successfully'};
    }
    async update(id:number,data:any){
        await this.prismaService.charge.update({where:{id},data});
        return {message:'Charge updated successfully'};
    }
    async remove(id:number){
        await this.prismaService.charge.delete({where:{id}});
        return {message:'Charge deleted successfully'};
    }
    //change state the true and false
    async changeState(id:number){
        const charge=await this.prismaService.charge.findUnique({where:{id}});
        if(charge.state){
            await this.prismaService.charge.update({where:{id},data:{state:false}});
            return {message:'Charge disabled successfully'};
        }else{
            await this.prismaService.charge.update({where:{id},data:{state:true}});
            return {message:'Charge enabled successfully'};
        }
    }
}
