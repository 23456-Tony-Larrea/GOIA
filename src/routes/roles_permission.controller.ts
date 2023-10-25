import { Controller, Get,Put, Param,Body } from '@nestjs/common';
import { RolesPermissionService } from '../models/roles_permission/roles_permission.service';

@Controller('roles-permission')
export class RolesPermissionController {
    constructor(private rolesPermissionService: RolesPermissionService) {}

    @Get(':id')
    async findWithJoin(@Param('id') id: string) {
        const roleId = parseInt(id);
        return this.rolesPermissionService.findWithJoin(roleId);
    }
    @Put(':roleId/:permissionId')
    async updateState(@Param('roleId') roleId: string, @Param('permissionId') permissionId: string, @Body() body: any) {
        const roleIdInt = parseInt(roleId);
        const permissionIdInt = parseInt(permissionId);
        const newState = body.state;
        return this.rolesPermissionService.updateState(roleIdInt, permissionIdInt, newState);
    }

}