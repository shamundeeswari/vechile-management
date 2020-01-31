import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloginModule } from './login/prelogin.module';
import { FrontuserModule } from './frontuser/frontuser.module';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PreloginModule,       
    FrontuserModule,
    SharedModule,
    AppRoutingModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
