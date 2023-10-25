import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { AsignatureProjectsService } from 'src/models/asignature-projects/asignature-projects.service';

@Controller('asignature-projects')
export class AsignatureProjectsController {
    constructor( private readonly asignatureProjectService:AsignatureProjectsService){}
    @Get()
    findAll(){
        return this.asignatureProjectService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        const idNumber = parseInt(id);
        return this.asignatureProjectService.findOne(idNumber);
    }
    @Post()
    create(@Body() data:{finishDate:Date,user_id:number,project_id:number,area_charge_id:number}){
        return this.asignatureProjectService.create(data);
    }
    @Put(':id')
    update(@Param('id') id:string,@Body() data:{finishDate:Date,user_id:number,project_id:number,area_charge_id:number}){
        const idNumber = parseInt(id);
        return this.asignatureProjectService.update(idNumber,data);
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        const idNumber = parseInt(id);
        return this.asignatureProjectService.remove(idNumber);
    }
}
