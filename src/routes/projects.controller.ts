import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { ProjectsService } from '../models/projects/projects.service';

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
    create(@Body() data:{name:string,state:boolean,finishDate:any,motiveDemore:string,observation:string,materialId:any,description:string}) {
        return this.projectsService.create(data);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() data:{name:string,state:boolean,finishDate:any,motiveDemore:string,observation:string,materialId:any,description:string}) {
        const idNumber = parseInt(id);
        return this.projectsService.update(idNumber,data);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.projectsService.remove(idNumber);
    }
}
