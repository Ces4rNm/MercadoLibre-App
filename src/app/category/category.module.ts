import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CategoryComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ],
  exports:[
    ProductsComponent
  ]
})
export class CategoryModule { }
