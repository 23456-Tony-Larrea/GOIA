import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/class/Users';
import { MatDialog } from '@angular/material/dialog'; // Importa MatDialog para el diálogo
import { EditUserDialogComponent } from 'src/app/admin/edit-user-dialog-component/edit-user-dialog-component.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
    users: User[] = [];
    displayedColumns: string[] = ['name', 'email','rol','acciones']; // Columnas a mostrar
    
    constructor(private usersService: UsersService, private dialog: MatDialog) {
        this.usersService.getUsers().subscribe((users) => {
            this.users = users;
        });
    }
    ngOnInit() {
      this.usersService.getUsers().subscribe((data: User[]) => {
        this.users = data;
        console.log(data)
      });
    }
    openEditDialog(user: User) {
      const dialogRef = this.dialog.open(EditUserDialogComponent, {
        data: user
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Actualiza el usuario en la lista
          const index = this.users.findIndex(u => u.id === result.id);
          this.users[index] = result;
        }
      });
    }
}
