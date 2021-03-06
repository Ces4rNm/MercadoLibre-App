import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SaleHistoryComponent } from './sale-history/sale-history.component'
import { HiddenNavBarFooterGuard } from './shared/guards/hidden-nav-bar-footer.guard';
import { ShowNavBarFooterGuard } from './shared/guards/show-nav-bar-footer.guard';
import { LoginComponent } from './user/login/login.component';
import { AddComponent } from './user/add/add.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    canActivate: [ShowNavBarFooterGuard]
  },
  {
    path: 'category/:categoryId',
    loadChildren: () => import('./category/category.module').then(mod => mod.CategoryModule),
    canActivate: [ShowNavBarFooterGuard]
  },
  {
    path: 'product/:productId',
    loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule),
    canActivate: [ShowNavBarFooterGuard]
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then(mod => mod.ShoppingCartModule),
    canActivate: [ShowNavBarFooterGuard]
  },
  {
    path: 'my-shoppings',
    loadChildren: () => import('./my-shoppings/my-shoppings.module').then(mod => mod.MyShoppingsModule),
    canActivate: [ShowNavBarFooterGuard]
  },
  {
    path: 'user/login',
    component: LoginComponent,
    canActivate: [HiddenNavBarFooterGuard]
  },
  {
    path: 'user/add',
    component: AddComponent,
    canActivate: [HiddenNavBarFooterGuard]
  },
  {
    path: 'sell-product',
    component: RegisterComponent,
    canActivate: [ShowNavBarFooterGuard]
  },
  {
    path: 'sale/history',
    component: SaleHistoryComponent,
    canActivate: [ShowNavBarFooterGuard]
  },
  {
    path: '**',
    redirectTo: ''
  },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
