import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { AreaChargeService } from '../models/area-charge/area-charge.service';
import moment from 'moment';

@Controller('area-charge')
export class AreaChargeController {
    constructor(private readonly areaChargeService: AreaChargeService) {}
    @Get()
    findAll() {
        return this.areaChargeService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.areaChargeService.findOne(idNumber);
    }
    @Post()
    create(@Body() data:{name:string,userId:any}) {
        return this.areaChargeService.create(data);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() data:{name:string,description:string,userId:any}) {
        const idNumber = parseInt(id);
        return this.areaChargeService.update(idNumber,data);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.areaChargeService.remove(idNumber);
    }
    @Put('change-state/:id')
    changeState(@Param('id') id: string) {
        const idNumber = parseInt(id);  
        return this.areaChargeService.changeState(idNumber);
    }
}
