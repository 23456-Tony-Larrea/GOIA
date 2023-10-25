import { Controller,Get,Put,Param,Body } from '@nestjs/common';
import { UsersService } from '../models/users/users.service';
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get(':id')
    async findWithJoin(@Param('id') id: string) {
        const userId = parseInt(id);
        return this.usersService.findByIdWithRoles(userId);
    }
    @Get()
    async findAll() {
        return this.usersService.findWithJoin();
    }
    @Put(':id')
    async updateState(@Param('id') id: string) {
        const userId = parseInt(id)
        return this.usersService.updateState(userId);
    }
    @Put('updateAll/:id')
    async updateAll(@Param('id') id: string, @Body() body: any) {
        const userId = parseInt(id);
        return this.usersService.updateAll(userId, body);
    }
}
