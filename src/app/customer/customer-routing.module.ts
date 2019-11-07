import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';

const routes: Routes = [


	{path: "", component: HeaderSidebarComponent, children: 
	[
		{
			path: "", redirectTo: "customer-List", pathMatch: "full"
		},
		{
			path: "customer-List", component: CustomerListComponent
		},
		{
			path: "customer-form", component: CustomerFormComponent
		},		
	]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
