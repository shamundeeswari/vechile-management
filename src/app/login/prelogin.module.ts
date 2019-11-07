import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { PreloginRoutingModule } from './prelogin-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PreloginComponent } from './prelogin/prelogin.component';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, ForgetPasswordComponent, PreloginComponent,ConfirmEqualValidatorDirective],
  imports: [
    CommonModule,
    PreloginRoutingModule,
    FormsModule
  ]
})
export class PreloginModule { }
