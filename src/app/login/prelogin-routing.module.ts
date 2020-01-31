import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PreloginComponent } from './prelogin/prelogin.component';

const routes: Routes = [

	{path: "", component: PreloginComponent, children: 
	[
		{
			path: "", redirectTo: "pre-login", pathMatch: "full"
		},
		{
			path: "pre-login", component: SignInComponent
		},
		{
			path: "signup", component: SignUpComponent
		},
		{
			path: "forget", component: ForgetPasswordComponent
		},
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloginRoutingModule { }
