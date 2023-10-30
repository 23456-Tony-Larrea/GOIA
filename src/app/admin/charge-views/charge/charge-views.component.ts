import { Component } from '@angular/core';
import { ChargeService } from 'src/app/services/charge.service';
import { Charge } from 'src/app/class/Charge';
import { MatDialog } from '@angular/material/dialog';
import { EditChargeComponent } from '../edit-charge/edit-charge.component';
import { AddChargeComponent } from '../add-charge/add-charge.component';

@Component({
  selector: 'app-charge-views',
  templateUrl: './charge-views.component.html',
  styleUrls: ['./charge-views.component.css']
})
export class ChargeViewsComponent {
charge:Charge[]=[];
displayedColumns: string[] = ['name','state' ,'actions'];
  constructor(private chargeService:ChargeService,private dialog:MatDialog) { 
    this.chargeService.getCharge().subscribe((charge)=>{
      this.charge=charge;
    });
  }
  ngOnInit() {
    this.chargeService.getCharge().subscribe((data: Charge[]) => {
      this.charge = data;
    });
  }
  openEditDialog(charge: Charge): void {
    const dialogRef = this.dialog.open(EditChargeComponent, {
      width: '250px',
      data: { ...charge }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.charge.findIndex((u) => u.id === result.id);
        this.charge[index] = result;
      }
    });
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddChargeComponent, {
      width: '350px' // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe((newCharge: Charge) => {
      if (newCharge) {
        // Agrega el nuevo usuario a la lista
        this.charge.push(newCharge);
      }
    });
  }
  changeState(charge: Charge) {
  this.chargeService.changeState(charge.id).subscribe((data) => {
    const index = this.charge.findIndex((u) => u.id === charge.id);
    this.charge[index] = data;
  });
  }
  /*   this.chargeService.changeState(c
  charge.id).subscribe((data) => {
      const index = this.charge.findIndex((u) => u.id === charge.id);
      this.charge[index] = data;
      //imrpirme x consola
      console.log(data);
    });
  } */

}
