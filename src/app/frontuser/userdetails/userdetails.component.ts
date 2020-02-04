import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Customer } from '../user.model';

import { customerDetail} from '../customerdetails'


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  customer;
  

  constructor( private route :ActivatedRoute,) { }

  ngOnInit() {

  	this.route.paramMap.subscribe(params => {
  		this.customer = customerDetail [+ params.get('customerId') ];
  	} )

  }

}
