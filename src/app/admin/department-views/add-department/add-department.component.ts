import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  department:any[]=[]
  newDepartmentName:string='';
  constructor(
    private dialogRef:MatDialogRef<AddDepartmentComponent>,
    private departmentService:DepartmentService
  ) { }
  addDepartment(){
    this.departmentService.addDepartment({name:this.newDepartmentName}).subscribe((response)=>{
      if(response){
        this.departmentService.getDepartment().subscribe((department)=>{
          this.department = department;
        });
        this.dialogRef.close();
      }
    })
  }
  ngOnInit():void{
    this.departmentService.getDepartment().subscribe((department)=>{
      this.department=department;
    })
  }
  

}
