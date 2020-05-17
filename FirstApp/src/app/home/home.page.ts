import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 email : string;
 password : string;
  constructor() {}
  text = "Hello World";
  login()
  {
      console.log(this.email,this.password)
  }

}
