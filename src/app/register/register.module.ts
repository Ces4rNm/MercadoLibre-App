import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { SelectOptionComponent } from './select-option/select-option.component';
@NgModule({
  declarations: [
    SelectOptionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  exports:[
    SelectOptionComponent
  ]
})
export class RegisterModule { }
