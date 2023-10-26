import { Body, Controller, Get, Param, Post,Put,Delete } from '@nestjs/common';
import { AsignatureProjectsService } from 'src/models/asignature-projects/asignature-projects.service';
import * as moment from 'moment';

@Controller('asignature-projects')
export class AsignatureProjectsController {
        constructor(private readonly asignatureProjectService:AsignatureProjectsService){}
@Get()
findAll() {
    return this.asignatureProjectService.findAll();
}
@Get(':id')
findOne(@Param('id')id:string){
    const idNumber = parseInt(id);
    return this.asignatureProjectService.findOne(idNumber);
}
@Post()
create(@Body() data:{
    areaChargeId:number,
    projectId:number,
    userId:number,
    finishDate:any
}){
    const formattedFinishDate = moment(data.finishDate, 'YYYY-MM-DD').format('YYYY-MM-DD');

    return this.asignatureProjectService.create({ ...data, finishDate: formattedFinishDate });
}
@Put(':id')
update(@Param('id')id:string,@Body()data:{
    areaChargeId:number,
    projectId:number,
    userId:number,
    finishDate:any
}){
    const idNumber = parseInt(id);
    const formattedFinishDate = moment(data.finishDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
    return this.asignatureProjectService.update(idNumber,{ ...data, finishDate: formattedFinishDate });
}
@Delete(':id')
remove(@Param('id')id:string){
    const idNumber = parseInt(id);
    return this.asignatureProjectService.remove(idNumber);
}
}

