import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SaleHistoryComponent } from './sale-history/sale-history.component';
import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppService } from './app.service';
import { APP_ROUTING } from './app-routing.module';
import { RegisterModule } from './register/register.module';
import { AddComponent } from './user/add/add.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SaleHistoryComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    SharedModule,
    RegisterModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
