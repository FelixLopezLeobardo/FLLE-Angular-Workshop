import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnicornsComponent } from './unicorns.component';
import { UnicornsRouteModule } from './unicorns.route';
import { MaterialModule } from 'src/app/material/material.module';
import { UnicornsUpdateComponent } from './unicorns-update/unicorns-update.component';
import { UnicornsViewComponent } from './unicorns-view/unicorns-view.component';
import { FormsModule } from '@angular/forms';
import { InputDataModule } from 'src/app/shared/input-data/input-data.module';



@NgModule({
  declarations: [
    UnicornsComponent,
    UnicornsUpdateComponent,
    UnicornsViewComponent
  ],
  imports: [
    CommonModule,
    UnicornsRouteModule,
    MaterialModule,
    FormsModule,
    InputDataModule
  ],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [UnicornsViewComponent,UnicornsUpdateComponent]
})
export class UnicornsModule { }
