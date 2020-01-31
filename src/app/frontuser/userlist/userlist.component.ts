import { Component, OnInit } from '@angular/core';

import { Customer } from '../user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})


export class UserlistComponent implements OnInit {

	customers:Customer[]=[

  	new Customer (

                // '02/02/2019',
                'assets/images/avatar3.png',
                'T Ritika singh',
                'Ritika singh@gmail.com',
                121212313,
                222556686,
                787895865
  				      ),
    new Customer (

                // '02/05/2019',
                'assets/images/avatar2.png',
                'v shamu ',
                'Ritika singh@gmail.com',
                121212313,
                222556686,
                787895865
                ),
    new Customer (

                // '02/05/2019',
                'assets/images/avatar1.png',
                'T Ritika singh',
                'Ritika singh@gmail.com',
                121212313,
                222556686,
                787895865
                ),
    new Customer (

                  // '02/05/2019',
                'assets/images/avatar5.png',
                'T Ritika singh',
                'Ritika singh@gmail.com',
                121212313,
                222556686,
                787895865
                ),
  ];

  constructor() { }


  ngOnInit() {
  }

  OnuserdetailAdded(customer:Customer){
    this.customers.push(customer);
  }

}
