// permissions.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from '../../DTO/CreatePermissionDto.class';
import { UpdatePermissionDto } from '../../DTO/UpdatePermissionDto.class';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Get()
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const idNumber = parseInt(id);
    return this.permissionsService.findOne(idNumber);
  }

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    const idNumber = parseInt(id);
    return this.permissionsService.update(idNumber, updatePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const idNumber = parseInt(id);
    return this.permissionsService.remove(idNumber);
  }
}
