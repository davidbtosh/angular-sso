import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ValuesService {

    constructor(
        private http: HttpClient, 
        private router: Router) { }


    getValues() : Observable<string[]> {
        return this.http.get<string[]>(environment.webApi + '/values');    
    }
}