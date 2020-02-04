import { Component, OnInit } from '@angular/core';

import { Customer } from '../user.model';
import { customerDetail} from '../customerdetails'


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})


export class UserlistComponent implements OnInit {

	customers = customerDetail;

  constructor() { }


  ngOnInit() {
  }

  OnuserdetailAdded(customer:Customer){
    this.customers.push(customer);
  }

}
