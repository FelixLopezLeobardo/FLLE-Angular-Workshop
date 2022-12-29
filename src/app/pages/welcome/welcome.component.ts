import { Component, SimpleChanges } from '@angular/core';
import { Softtekian } from 'src/app/interfaces/softtekian';
import { WelcomeService } from 'src/app/services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  longText = "Texto para inicializar la variable => longText";
  softtekians: Softtekian[] = [];   
  
  cabeceraTabla: string[] = ['nombre', 'edad', 'is', 'ciudad','estado'];

  constructor(private  welcomeService: WelcomeService){}
  ngOnDestroy(): void {
  }
 
  ngOnInit(): void {
      this.welcomeService.getData().subscribe(data =>{
        if(data.my_data){
          this.softtekians = data.my_data as Softtekian[];      
          this.longText = "Hola, mi nombre es "+this.softtekians[0].nombre+", mi IS es "+this.softtekians[0].is +", tengo "+ this.softtekians[0].edad + " años, vivo en "+this.softtekians[0].ciudad+", mi estado es "+ this.softtekians[0].estado ;
        }
      });
  }

  

}
