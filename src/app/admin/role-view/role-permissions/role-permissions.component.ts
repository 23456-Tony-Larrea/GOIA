import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from 'primeng/api';
import { Permission } from '../../../class/Permission';
import { Roles } from '../../../class/Roles';
import { UsersService } from 'src/app/services/users.service';
import { PermissionsService } from 'src/app/services/permissions.service';
import { EditRoleComponent } from '../edit-role/edit-role.component';
import Swal from 'sweetalert2';
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

  }
  createRole() {
    this.permissionService.addRoles({name:this.newRoleName}).subscribe((data) => {
      this.roles.push(data);
      this.showSuccessMessage('el rol ha sido creado con exito ');
      this.newRoleName = ''; // Limpiar el campo de nombre de rol después de agregar uno nuevo
      this.usersService.getRoles().subscribe((roles) => { // Actualizar la lista de roles
        this.roles = roles;
      });
    });
  }

  deleteRole(role: Roles) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.permissionService.deleteRoles(role.id).subscribe((data) => {
          this.roles = this.roles.filter((r) => r.id !== role.id);
          this.showSuccessMessage('el rol ha sido eliminado con exito ');
        });
      }
    });
  }

  editRole(role: Roles):void {
   const dialogRef = this.dialog.open(EditRoleComponent, {
    width: '250px',
    data: role
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result && result.updated) {
      this.roles = result.roles;
    }
  });
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
    this.rolePermissions.map((rolePermission)=>rolePermission.permission.name)
  }
  updateRolePermissions(roleId: number, permissionId: number, state: boolean) {
    this.permissionService.updateRolePermission(roleId, permissionId, state).subscribe((data) => {
      this.showSuccessMessage('el permiso del rol ha sido actualizado con exito ');
    });
  }
}