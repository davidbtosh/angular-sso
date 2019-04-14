import { Injectable } from '@angular/core';

import * as Msal from 'msal';
import { environment } from '../../environments/environment';

@Injectable()
export class MsalService {

    B2CTodoAccessTokenKey = 'b2c.access.token';

    // Configure the authority for Azure AD B2C
    authority = 'https://login.microsoftonline.com/tfp/' + environment.tenant + '/' + environment.signInPolicy;

    /*
     * B2C SignIn SignUp Policy Configuration
     */
    clientApplication = new Msal.UserAgentApplication(
        environment.clientID, this.authority,
        function(errorDesc: any, token: any, error: any, tokenType: any) {
      }
    );

    public login(): void {
      this.clientApplication.authority = 'https://login.microsoftonline.com/tfp/' + environment.tenant + '/' + environment.signInPolicy;
      this.authenticate();
    }

    public signup(): void {
      this.clientApplication.authority = 'https://login.microsoftonline.com/tfp/' + environment.tenant + '/' + environment.signUpPolicy;
      this.authenticate();
    }

    public authenticate(): void {    
        this.removeAccessTokenFromCache();  
        this.clientApplication.loginPopup(environment.b2cScopes).then((idToken: any) => {
            console.log('idToken');
            console.log(idToken);
            console.log('');
            this.clientApplication.acquireTokenSilent(environment.b2cScopes).then(
                (accessToken: any) => {
                    console.log('accessToken');
                    console.log(accessToken);
                    console.log('');
                    this.saveAccessTokenToCache(accessToken);                 
                }, (error: any) => {
                     console.log(error);
                    //  this.clientApplication.acquireTokenPopup(this.tenantConfig.b2cScopes).then(                        
                    //     (accessToken: any) => {
                    //         console.log('accessToken');
                    //         console.log(accessToken);
                    //         console.log('');
                    //         this.saveAccessTokenToCache(accessToken);                        
                    //     }, (error: any) => {
                    //         console.log('error: ', error);
                    //     });
                });        
        }, (error: any) => {
            console.log('error: ', error);
        });
    }

    saveAccessTokenToCache(accessToken: string): void {
        sessionStorage.setItem(this.B2CTodoAccessTokenKey, accessToken);
    }

    removeAccessTokenFromCache(): void {
        sessionStorage.removeItem(this.B2CTodoAccessTokenKey);
    }

    logout(): void {
        this.removeAccessTokenFromCache();
        this.clientApplication.logout();
    }

    isLoggedIn(): boolean {
        //return this.clientApplication.getUser() != null;
        const token = sessionStorage.getItem(this.B2CTodoAccessTokenKey);
        return token != null;
    }

    getUserEmail(): string {
        if(this.getUser() != null && this.getUser().idToken != null) {
            return this.getUser().idToken['emails'][0];
        }
        return "";
    }

    getUser() {
      return this.clientApplication.getUser();
    }
}
