import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AreaChargeService {
    constructor(private prismaService:PrismaService) {}
    async findAll(){
        return this.prismaService.areaCharge.findMany({
            include:{
                Users:true
            }
        });
    }
    async findOne(id:number){
        return this.prismaService.areaCharge.findUnique({where:{id},
            include:{
                Users:true
            }
        });
    }
    async create(data:any){
        await this.prismaService.areaCharge.create({data});
        return {message:'AreaCharge created successfully'};
    }
    async update(id:number,data:any){
        await this.prismaService.areaCharge.update({where:{id},data});
        return {message:'AreaCharge updated successfully'};
    }
    async remove(id:number){
        await this.prismaService.areaCharge.delete({where:{id}});
        return {message:'AreaCharge deleted successfully'};
    }
    //change state
    async changeState(id:number){
        const areaCharge = await this.prismaService.areaCharge.findFirst({
            where: {
                id,
            },
        })
        if(!areaCharge){
            return { message: 'AreaCharge not found' };
        }
        if(areaCharge.state){
            await this.prismaService.areaCharge.update({
                where: {
                    id: areaCharge.id,
                },
                data: {
                    state: false,
                },
            });
            return { message: 'AreaCharge disabled successfully' };
        }else{
            await this.prismaService.areaCharge.update({
                where: {
                    id: areaCharge.id,
                },
                data: {
                    state: true,
                },
            });
            return { message: 'AreaCharge enabled successfully' };
        }
    }
}
