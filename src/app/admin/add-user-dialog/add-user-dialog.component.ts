import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { UserRegister } from 'src/app/class/UserRegister';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  newUser: UserRegister = {
    name: '',
    email: '',
    password: '123', // Deja el campo de contraseña vacío por defecto
    roleId: 0 // Deja el campo de rol vacío por defecto
  };
  roles: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    // Obtener roles para llenar el menú desplegable
    this.usersService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  addUser() {
    this.usersService.registerUser(this.newUser).subscribe((response) => {
      if (response) {
        this.dialogRef.close(this.newUser); // Cerrar el diálogo y pasar el nuevo usuario al componente principal
      }
    });
  }
}
