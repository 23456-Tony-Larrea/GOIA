import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/class/Users';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../../admin/edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'rol', 'actions'];

  constructor(private usersService: UsersService, private dialog: MatDialog) {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(data);
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
}