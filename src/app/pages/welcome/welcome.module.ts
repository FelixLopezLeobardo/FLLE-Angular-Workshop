import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { welcomeRouteModule } from './welcome.route';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    welcomeRouteModule,
    CommonModule,
    MaterialModule,    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule { }
