import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-unicorns-view',
  templateUrl: './unicorns-view.component.html',
  styleUrls: ['./unicorns-view.component.css']
})
export class UnicornsViewComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public unicorn: any,        
     public dialogRef: MatDialogRef<UnicornsViewComponent>
    ){
}

ngOnInit(): void {
    
}
cerrarVentana() {
    this.dialogRef.close();
  }

}
