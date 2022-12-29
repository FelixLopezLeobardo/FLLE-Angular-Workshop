import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginRouteModule } from './login.route';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRouteModule,
    MaterialModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
