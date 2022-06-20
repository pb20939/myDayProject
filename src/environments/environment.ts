// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {HttpParams} from "@angular/common/http";


export const environment = {
  production: false,
  holidaysApiBaseUrl: 'https://holidays.abstractapi.com/v1/',
  planetsApiBaseUrl: 'https://data.mongodb-api.com/app/data-qtawu/endpoint/data/v1/action/findOne',
  ContentTypeName: 'Content-Type',
  ContentTypeValue: 'application/json',
  apikeyName: 'api-key',
  apikeyValue: 'qkDU7EUTlxOaOPuXJoF7KGNfCLIdPMmqMoU2TKC1L31DO2tBPdX1seRrugbRoStk',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
