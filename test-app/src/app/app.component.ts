import { Component } from '@angular/core';
import * as Msal from 'msal';
import { MsalService } from './services/msal.service';
import { ValuesService } from './services/values.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'b2c-basic-app';

  values: string[];

  constructor(private msalService: MsalService, 
              private valuesService: ValuesService) { }

  useremail() {
    const useremail = this.msalService.getUserEmail();
    return useremail;
  }

  login() {
    this.msalService.login();
  }

  signup() {
    this.msalService.signup();
  }

  logout() {
    this.msalService.logout();
  }

  getValues() {
    //alert('test');
    this.valuesService.getValues().subscribe(
      resp => {               
          if(resp) {
            this.values = resp;
          }
      },
      error => {     
        //this.commsService.emitAlert({ type: 'error', text: 'server error.' });
        this.values = [];
        console.log(error);
      }
    );



  }

  isUserLoggedIn() {
    return this.msalService.isLoggedIn();
  }

}


