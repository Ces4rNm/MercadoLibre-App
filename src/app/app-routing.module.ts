import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SaleHistoryComponent } from './sale-history/sale-history.component'

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user/login',
    component: SigninComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'sale/history',
    component: SaleHistoryComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
