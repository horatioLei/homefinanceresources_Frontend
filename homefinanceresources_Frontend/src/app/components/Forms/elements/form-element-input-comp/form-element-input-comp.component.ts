import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormElementInputCompModel } from '../models/form-element-input-comp.model';

@Component({
  selector: 'app-form-element-input-comp',
  templateUrl: './form-element-input-comp.component.html',
  styleUrls: ['./form-element-input-comp.component.css']
})
export class FormElementInputCompComponent implements OnInit {
  @Input() parameter: FormElementInputCompModel = new FormElementInputCompModel()
  @Output() returnValue: EventEmitter<string> = new EventEmitter<string>()
  value: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  OnBlur() {
    this.returnValue.emit(this.value)
  }
}
