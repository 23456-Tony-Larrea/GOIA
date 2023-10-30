import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService ) {}    
    async findWithJoin() {
        return this.prismaService.users.findMany({
            include:{
                role:true,
                Charge:true,
                Department:true
            },
            where: {
                state: true
            }
    });
    }
    async updateState(userId: number) {
        const user = await this.prismaService.users.findFirst({
            where: {
                id:userId,
            },
        })
        if(!user){
            return { message: 'User not found' };
        }
        if(user.state){
            await this.prismaService.users.update({
                where: {
                    id: user.id,
                },
                data: {
                    state: false,
                },
            });
            return { message: 'User disabled successfully' };
        }else{
            await this.prismaService.users.update({
                where: {
                    id: user.id,
                },
                data: {
                    state: true,
                },
            });
            return { message: 'User enabled successfully' };
        }
    }
    //get by id with roles
    async findByIdWithRoles(userId: number) {
        return this.prismaService.users.findFirst({
            where:{
                id:userId
            },
            include:{
                role:true,
                Charge:true,
                Department:true
            },
    });
    }
    //update all information with roles
    async updateAll(userId: number, body: any) {
        const user = await this.prismaService.users.findFirst({
            where: {
                id:userId,
            },
        })
        if(!user){
            return { message: 'User not found' };
        }
        user.name=body.name;
        user.email=body.email;
        user.roleId=body.roleId;
        await this.prismaService.users.update({
            where: {
                id: user.id,
            },
            data: {
                name: body.name,
                email: body.email,
                roleId: body.roleId,
            },
        });
        return { message: 'User updated successfully' };
    }
}
