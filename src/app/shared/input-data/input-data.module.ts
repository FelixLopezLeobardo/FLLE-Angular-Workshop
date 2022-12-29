import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDataComponent } from './input-data.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputDataComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports : [InputDataComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputDataModule { }
