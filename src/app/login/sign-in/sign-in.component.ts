import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', '../sign-up/sign-up.component.css']
})
export class SignInComponent implements OnInit {

  model:any={}

  constructor() { }

  ngOnInit() {
  }

}
