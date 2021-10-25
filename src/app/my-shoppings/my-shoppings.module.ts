import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyShoppingsComponent } from './my-shoppings.component';
import { MyShoppingsRoutingModule } from './my-shoppings-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MyShoppingsComponent
  ],
  imports: [
    CommonModule,
    MyShoppingsRoutingModule,
    SharedModule
  ]
})
export class MyShoppingsModule { }
