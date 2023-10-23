import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/class/Users';
import { Roles } from 'src/app/class/Roles';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-edit-user-dialog-component',
  templateUrl: './edit-user-dialog-component.component.html',
  styleUrls: ['./edit-user-dialog-component.component.css']
})
export class EditUserDialogComponent {
  user: User;
  roles: Roles[]=[];

  constructor(
    private usersService: UsersService,
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    // Crea una copia del usuario para evitar modificar el original
    this.user = { ...data };
  }

  save() {
    //GUARDA DESDE LA API
    this.usersService.editUser(this.user).subscribe((user) => {

      this.user = user;
    });
    this.dialogRef.close(this.user);

  }

  cancel() {
    // Cierra el diálogo sin hacer cambios
    this.dialogRef.close();
  }
  ngOnInit(){
    this.usersService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });

  }
}