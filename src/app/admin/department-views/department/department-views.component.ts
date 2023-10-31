import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/class/Department';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentComponent } from '../add-department/add-department.component';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';
@Component({
  selector: 'app-department-views',
  templateUrl: './department-views.component.html',
  styleUrls: ['./department-views.component.css']
})
export class DepartmentViewsComponent {
  department:Department[]=[];
displayedColumns: string[] = ['name','state' ,'actions'];
constructor(private departmentService:DepartmentService,private dialog:MatDialog){
}
ngOnInit() {
  this.departmentService.getDepartment().subscribe((data: Department[]) => {
    this.department = data;
  });
}
openAddDialog():void{
  const dialogRef = this.dialog.open(AddDepartmentComponent, {
    width: '350px' // Ajusta el ancho según tus necesidades
  });
  dialogRef.afterClosed().subscribe((newDepartment: Department) => {
    if (newDepartment) {
      // Agrega el nuevo usuario a la lista
      this.department.push(newDepartment);
    }
  });
}
openEditDialog(department: Department): void {
  const dialogRef = this.dialog.open(EditDepartmentComponent, {
    width: '250px',
    data: { ...department }
  });
  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      const index = this.department.findIndex((u) => u.id === result.id);
      this.department[index] = result;
    }
  });
}
changeState(department: Department) {
this.departmentService.changeState(department.id).subscribe((data) => {
  const index = this.department.findIndex((u) => u.id === department.id);
  this.department[index] = data;
});
}
}

