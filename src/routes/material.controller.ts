import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MaterialService } from 'src/models/material/material.service';

@Controller('material')
export class MaterialController {
    constructor(private readonly materialService: MaterialService) {}
    
    @Get()
    findAll() {
        return this.materialService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.materialService.findOne(idNumber);
    }
    
    @Post()
    create(@Body() data:{name:string,state:boolean}) {
        return this.materialService.create(data);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() data:{name:string,state:boolean}) {
        const idNumber = parseInt(id);
        return this.materialService.update(idNumber,data);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        const idNumber = parseInt(id);
        return this.materialService.remove(idNumber);
    }

}
