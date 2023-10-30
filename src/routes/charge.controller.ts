import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { ChargeService } from '../models/charge/charge.service';
@Controller('charge')
export class ChargeController {
    constructor(private readonly chargeService: ChargeService) {}
    @Get()
    findAll() {
        return this.chargeService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.chargeService.findOne(idNumber);
    }
    @Post()
    create(@Body() data:{name:string,state:boolean}) {
        return this.chargeService.create(data);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() data:{name:string,state:boolean}) {
        const idNumber = parseInt(id);
        return this.chargeService.update(idNumber,data);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.chargeService.remove(idNumber);
    }
    @Put('  :id')
    changeState(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.chargeService.changeState(idNumber);
    }
}
