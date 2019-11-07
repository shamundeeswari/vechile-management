import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css','../sign-up/sign-up.component.css']
})
export class ForgetPasswordComponent implements OnInit {
	
  model:any={}

  constructor() { }

  ngOnInit() {
  }

}
