import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { AreaChargeProjectsService } from 'src/models/area-charge_projects/area-charge_projects.service';
@Controller('area-charge-projects')
export class AreaChargeProjectsController {
    constructor(private readonly areaChargeProjectsService: AreaChargeProjectsService) {}
    @Get()
    findAll() {
        return this.areaChargeProjectsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.areaChargeProjectsService.findOne(idNumber);
    }
    @Post()
    create(@Body() data:{area_charge_id:number,project_id:number}) {
        return this.areaChargeProjectsService.create(data);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() data:{area_charge_id:number,project_id:number}) {
        const idNumber = parseInt(id);
        return this.areaChargeProjectsService.update(idNumber,data);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.areaChargeProjectsService.remove(idNumber);
    }

}
