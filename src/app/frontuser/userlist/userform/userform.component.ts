import { Component, OnInit,ElementRef,ViewChild,EventEmitter,Output } from '@angular/core';
import { Customer } from '../../user.model';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

 @ViewChild('userName') nameInputRef:ElementRef;
 @ViewChild('userMail') mailInputRef:ElementRef;
 // @ViewChild('userDetail') detailInputRef:ElementRef;
 @ViewChild('userHome') homeInputRef:ElementRef;
 @ViewChild('userWork') workInputRef:ElementRef;
 @ViewChild('userMob') mobInputRef:ElementRef;

 @Output() userdetailAdded = new EventEmitter<Customer>();


  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
  	const srName = this.nameInputRef.nativeElement.value;
  	const srMail = this.mailInputRef.nativeElement.value;
  	// const srDtl = this.detailInputRef.nativeElement.value;
  	const srHome = this.homeInputRef.nativeElement.value;
  	const srWork = this.workInputRef.nativeElement.value;
  	const srMob = this.mobInputRef.nativeElement.value;



  	const newuserdetail = new Customer(srName,srMail,srHome,srWork,srMob);
  	this.userdetailAdded.emit(newuserdetail);

  	//console.log(newuserdetail);

  }

}
