import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css'],
  viewProviders: [{provide: ControlContainer,useExisting:NgForm}]
})

export class InputDataComponent {

  
  @Input() ph?: string;
  @Output() inputData = new EventEmitter<string>();
  timeout : any = null;
  @Input() typeInput?: string;
  @Input() val : any;

  
  ngOnInit(): void{

  }

  captureValue(event: any): void{
    clearTimeout(this.timeout);
    const $this = this;
    this.timeout = setTimeout(function () {
      if(event.keyCode != 13){
        $this.val = event.target.value;
        $this.updateValue();
      }
    },500);
  }

  updateValue(): void{
    this.inputData.emit(this.val);
  }


}
