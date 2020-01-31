import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	  {
      path: 'login',
      loadChildren:() => import('./login/prelogin.module').then(m => m.PreloginModule) 
    },
    
     {
      path: 'frontuser',
      loadChildren:() => import('./frontuser/frontuser.module').then(m => m.FrontuserModule) 
    }

];

	

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
