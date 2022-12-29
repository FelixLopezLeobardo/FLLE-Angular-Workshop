import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UnicornsService } from 'src/app/services/unicorns.service';

@Component({
  selector: 'app-unicorns-update',
  templateUrl: './unicorns-update.component.html',
  styleUrls: ['./unicorns-update.component.css']
})
export class UnicornsUpdateComponent {

  constructor(
    private dialogRef : MatDialogRef<UnicornsUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public unicorn: any , private unicornService : UnicornsService){

}

ngOnInit(): void {
    if(!this.unicorn){ 
        this.unicorn = {name:"",age:0,colour:""};
    }
}

// getName(event:any):void{
//     this.unicorn.name = event;
// }
// getColor(event:any):void{
//     this.unicorn.colour = event;
// }
// getEdad(event:any):void{
//     this.unicorn.age = event;
// }

guardar():void{
    if(this.unicorn && this.unicorn._id){
        console.log("PUT id unicornio ==>" , this.unicorn._id);            
        this.unicornService.putUnicorn(this.unicorn,this.unicorn._id).subscribe(resp =>{
            this.dialogRef.close(resp.status);
        });
    }else{
        console.log("POST unicornio ==>" , this.unicorn);            
        this.unicornService.postUnicorn(this.unicorn).subscribe(res=>{
            this.dialogRef.close(res.status);
        });
    }
}

cerrarVentana() {
    this.dialogRef.close();
  }

}
