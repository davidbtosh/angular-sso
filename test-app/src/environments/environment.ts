// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tenant: 'mtosh.onmicrosoft.com',
  // Replace this with your client id
  clientID: 'de0a0bbe-fe08-42a7-98c2-7cf71f34e32f',
  signInPolicy: 'B2C_1_SignIn',
  signUpPolicy: 'B2C_1_EmailSignUp',
  redirectUri: 'http://localhost:4200',
  //b2cScopes: ['https://mtosh.onmicrosoft.com/api/user_impersonation', 'https://mtosh.onmicrosoft.com/api/api.read', 'https://mtosh.onmicrosoft.com/api/api.write'],
  b2cScopes: ['https://mtosh.onmicrosoft.com/api/api.read'],
  webApi: 'http://localhost:63152/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
