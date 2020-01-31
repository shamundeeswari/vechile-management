import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserformComponent } from './userlist/userform/userform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
const routes: Routes = [
	
	
		{
			path: "user-form", component: UserformComponent
		},
		{
			path: "user-list", component: UserlistComponent
		},

		 { path: 'Customers/:customerId', component: UserdetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontuserRoutingModule { }
