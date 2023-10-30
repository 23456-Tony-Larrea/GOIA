import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChargeService } from 'src/app/services/charge.service';


@Component({
  selector: 'app-add-charge',
  templateUrl: './add-charge.component.html',
  styleUrls: ['./add-charge.component.css']
})
export class AddChargeComponent implements OnInit{
  newCharge:any[]=[]
  newChargeName:string='';



  
    constructor(
      private dialogRef:MatDialogRef<AddChargeComponent>,
      private chargeService:ChargeService
    ) { }
  
    ngOnInit(): void {
      this.chargeService.getCharge().subscribe((change)=>{
        this.newCharge=change;
      })
    }
    addCharge(){
      this.chargeService.addCharge({name:this.newChargeName}).subscribe((response)=>{
        if(response){
          this.chargeService.getCharge().subscribe((charge)=>{
            this.newCharge = charge;
          });
          this.dialogRef.close();
        }
      })
    }

}
