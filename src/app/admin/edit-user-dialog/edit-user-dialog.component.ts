import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/class/Users';
import { UsersService } from 'src/app/services/users.service';
import { Roles } from 'src/app/class/Roles';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent {
  roles: Roles[]=[];
  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
       
    private usersService: UsersService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.usersService.editUser(this.data).subscribe((user) => {
      this.dialogRef.close(user);
    });
  }
  ngOnInit(){
    this.usersService.getRoles().subscribe((data: any) => {
      this.roles = data;
      console.log(data);
    });
  }
}