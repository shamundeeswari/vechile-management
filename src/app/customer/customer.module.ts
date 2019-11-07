import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';




@NgModule({
  declarations: [CustomerListComponent, CustomerFormComponent, HeaderSidebarComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
  ]
})
export class CustomerModule { }
