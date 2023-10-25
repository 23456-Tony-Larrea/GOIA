import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { DepartmentService } from './department.service';
@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService:DepartmentService) {}
    @Get()
    findAll() {
        return this.departmentService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:string) {
        const idNumber = parseInt(id);
        return this.departmentService.findOne(idNumber);
    }
    @Post()
    create(@Body() data:{name:string,state:boolean}) {
        return this.departmentService.create(data);
    }
    @Put(':id')
    update(@Param('id') id:string, @Body() data:{name:string,state:boolean}) {
        const idNumber = parseInt(id);
        return this.departmentService.update(idNumber,data);
    }
    @Delete(':id')
    remove(@Param('id') id:string) {
        const idNumber = parseInt(id);
        return this.departmentService.remove(idNumber);
    }
    @Put('change-state/:id')
    changeState(@Param('id') id:string) {
        const idNumber = parseInt(id);
        return this.departmentService.changeState(idNumber);
    }
}

