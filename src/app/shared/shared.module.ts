import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { discountPipe, moneyPipe } from './pipes/home.pipe';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    discountPipe,
    moneyPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    discountPipe,
    moneyPipe
  ],
})
export class SharedModule { }
