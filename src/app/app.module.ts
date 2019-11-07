import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PreloginModule} from './login/prelogin.module';
import {CustomerModule} from './customer/customer.module';







@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PreloginModule,   
    CustomerModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
