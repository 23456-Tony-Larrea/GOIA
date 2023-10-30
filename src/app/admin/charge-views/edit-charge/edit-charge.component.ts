import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChargeService } from 'src/app/services/charge.service';
import { MessageService } from 'primeng/api';
import { Charge } from 'src/app/class/Charge';

@Component({
  selector: 'app-edit-charge',
  templateUrl: './edit-charge.component.html',
  styleUrls: ['./edit-charge.component.css']
})
export class EditChargeComponent {
  charge: Charge[] = [];
  constructor(
    public dialogRef: MatDialogRef<EditChargeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Charge,
    private chargeService: ChargeService,
    private messageService: MessageService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.chargeService.editCharge(this.data).subscribe((charge) => {
      this.dialogRef.close(charge);
      this.showSuccessMessage('el cargo ha sido editado con exito ');
      //actualizar sin tener que refrescar
      this.chargeService.getCharge().subscribe((charge) => {
        this.charge = charge;
      });
    });
  }
  showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }
}
