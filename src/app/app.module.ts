import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './shared/shared.module';
import { AppService } from './app.service';
import { APP_ROUTING } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    SharedModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
