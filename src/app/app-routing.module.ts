import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SaleHistoryComponent } from './sale-history/sale-history.component'

export const APP_ROUTES: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'category/:categoryId', loadChildren: () => import('./category/category.module').then(mod => mod.CategoryModule) },
  { path: 'product/:productId', loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule) },
  { path: 'shopping-cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(mod => mod.ShoppingCartModule) },
  { path: 'my-shoppings', loadChildren: () => import('./my-shoppings/my-shoppings.module').then(mod => mod.MyShoppingsModule) },
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

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
