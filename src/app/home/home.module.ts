import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { OffersComponent } from './components/offers/offers.component';
import { RecordComponent } from './components/record/record.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    OffersComponent,
    RecordComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
