import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from 'primeng/api';
import { Permission } from '../../class/Permission';
import { Roles } from '../../class/Roles';
import { RolePermission } from 'src/app/class/RolePermissions';
import { UsersService } from 'src/app/services/users.service';
import { PermissionsService } from 'src/app/services/permissions.service';

@Component({
  selector: 'app-role-permissions',
  templateUrl: './role-permissions.component.html',
  styleUrls: ['./role-permissions.component.css']
})
export class RolePermissionsComponent {
  roles: Roles[] = [];
  newRoleName: string = '';
  selectedRole: Roles | null = null;
  selectedRoleName: string = '';
  permissions: Permission[] =[];
  rolePermissions: any[] = [];


  constructor(private permissionService:PermissionsService,private usersService: UsersService,private dialog: MatDialog, private snackBar: MatSnackBar,private messageService:MessageService) {
    this.usersService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
 /*    this.permissionService.getPermissions().subscribe((permissions) => {
      this.permissions = permissions;
    }); */

  }
  createRole() {
    if (this.newRoleName.trim() === '') {
      this.snackBar.open('Role name cannot be empty', 'Close', { duration: 3000 });
      return;
    }
    if (this.roles.some(role => role.name === this.newRoleName)) {
      this.snackBar.open('Role already exists', 'Close', { duration: 3000 });
      return;
    }
    this.newRoleName = '';
  }

  deleteRole(role: Roles) {
    const index = this.roles.indexOf(role);
    if (index !== -1) {
      this.roles.splice(index, 1);
    }
    if (this.selectedRole === role) {
      this.selectedRole = null;
      this.selectedRoleName = '';
    }

  }

  editRole(role: Roles) {
    // TODO: Implement edit role functionality
  }
  showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }
  selectRole(roleId: number) {
    const selectedRole=this.roles.find((role)=>role.id===roleId)
    if (selectedRole) {
      this.selectedRole = selectedRole;
      this.selectedRoleName = selectedRole.name;
      this.permissionService.getRolesById(roleId).subscribe((data) => {
        this.rolePermissions = data;
      });
    }
    //extraer el nombre de permisos
    this.rolePermissions.map((rolePermission)=>rolePermission.permission.name)

  }
  updateRolePermissions(roleId: number, permissionId: number, state: boolean) {
    this.permissionService.updateRolesPermissions(roleId, permissionId, state).subscribe((data) => {
      this.showSuccessMessage('Role permissions updated successfully');
    });
  }
}