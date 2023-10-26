import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { ProjectsService } from '../models/projects/projects.service';
import * as moment from 'moment';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}
    @Get()
    findAll() {
        return this.projectsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.projectsService.findOne(idNumber);
    }
    @Post()
    create(@Body() data: {
        name: string,
        state: boolean,
        finishDate: string,
        motiveDemore: string,
        observation: string,
        materialId: any,
        description: string,
    }) {
        // Asegúrate de que finishDate tenga el formato correcto (YYYY-MM-DD)
        const formattedFinishDate = moment(data.finishDate, 'YYYY-MM-DD').format('YYYY-MM-DD');

        return this.projectsService.create({ ...data, finishDate: formattedFinishDate });
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() data:{name:string,state:boolean,finishDate:any,motiveDemore:string,observation:string,materialId:any,description:string}) {
        const idNumber = parseInt(id);
        const formattedFinishDate = moment(data.finishDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
        return this.projectsService.update(idNumber,{ ...data, finishDate: formattedFinishDate });
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.projectsService.remove(idNumber);
    }
}
