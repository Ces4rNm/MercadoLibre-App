import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyShoppingsComponent } from './my-shoppings.component';


const routes: Routes = [
  { path: '', component: MyShoppingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyShoppingsRoutingModule { }
