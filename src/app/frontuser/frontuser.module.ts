import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { FrontuserRoutingModule } from './frontuser-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { UserformComponent } from './userlist/userform/userform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [UserlistComponent, UserformComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    FrontuserRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class FrontuserModule { }
