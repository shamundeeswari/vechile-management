export class Customer{


	public imgPath : string;
	public name:string;
	public email:any;
	public homNum:number;
	public workNum:number;
	public mobNum:number;


	constructor( imgPath:string,name:string,email:any,
				 homNum:number,workNum:number,mobNum:number)
	{

		this.imgPath = imgPath;
		this.name = name;
		this.email = email;
		this.homNum = homNum;
		this.workNum = workNum;
		this.mobNum = mobNum;

	}

}

