import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/class/Users';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component'; // Importa el componente de diálogo de agregar usuarios

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'rol','state' ,'actions'];

  constructor(private usersService: UsersService, private dialog: MatDialog) {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  openEditDialog(user: User): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '250px',
      data: { ...user }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.users.findIndex((u) => u.id === result.id);
        this.users[index] = result;
      }
    });
  }

  // Nuevo método para abrir el cuadro de diálogo de agregar usuarios
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '350px' // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe((newUser: User) => {
      if (newUser) {
        // Agrega el nuevo usuario a la lista
        this.users.push(newUser);
      }
    });
  }
  //usar change state 
  changeState(user: User) {
    this.usersService.changeState(user.id).subscribe((data) => {
      const index = this.users.findIndex((u) => u.id === user.id);
      this.users[index] = data;
    });
  }
}

