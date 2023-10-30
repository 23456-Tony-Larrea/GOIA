import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  PermissionsService} from 'src/app/services/permissions.service';
import { MessageService } from 'primeng/api';
import { UsersService } from 'src/app/services/users.service';

import { Roles } from 'src/app/class/Roles';
@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent {
  roles: Roles[]=[];
  constructor(
    public dialogRef: MatDialogRef<EditRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Roles,
    private permissionService: PermissionsService,
    private messageService:MessageService,
    private usersService: UsersService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.permissionService.editRoles(this.data).subscribe((roles) => {
      this.dialogRef.close(roles);
      this.showSuccessMessage('el rol ha sido editado con exito ');
      //actualizar sin tener que refrescar
      this.usersService.getRoles().subscribe((roles) => {
        this.roles = roles;
      });
      
    });
  }
  ngOnInit(){
    this.usersService.getRoles().subscribe((data: any) => {
      this.roles = data;
      console.log(data);
    });
  }
  showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }
}
