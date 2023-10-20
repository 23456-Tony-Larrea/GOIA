import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolesDto } from '../../DTO/roles/CreateRolesDto.class';
import { UpdateRolesDto } from '../../DTO/roles/UpdateRolesDto.class';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}
    @Get()
    findAll() {
        return this.rolesService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.rolesService.findOne(idNumber);
    }
    
    @Post()
    create(@Body() createRolesDto: CreateRolesDto) {
        return this.rolesService.create(createRolesDto);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() updateRolesDto: UpdateRolesDto) {
        const idNumber = parseInt(id);
        return this.rolesService.update(idNumber, updateRolesDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.rolesService.remove(idNumber);
    }
}
