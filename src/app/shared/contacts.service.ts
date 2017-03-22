import { Injectable } from '@angular/core';

import { Http, Response }  from '@angular/http';
import { Contacts } from '../contacts';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class ContactsService {

    constructor( public _http:Http) { }

    getUsers():Observable<Contacts[]>{
        return this._http.get('http://192.168.1.118:3000/api/samples')
                .map(response => response.json() as Contacts[])
                .catch(this.handleError);

    }
   
    private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
  }
}