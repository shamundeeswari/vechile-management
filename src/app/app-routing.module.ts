import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreloginModule} from './login/prelogin.module';
import {PreloginRoutingModule} from './login/prelogin-routing.module';

import {CustomerModule} from './customer/customer.module';
import {CustomerRoutingModule} from './customer/customer-routing.module';

const routes: Routes = [
	{ path: 'prelogin', loadChildren: () => import(`./login/prelogin.module`).then(m => m.PreloginModule) },		
	{ path: 'customer', loadChildren: () => import(`./customer/customer.module`).then(m => m.CustomerModule) },	
];


	
	

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
