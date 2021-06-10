import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }


  getFullName(city: string): Observable<string> {

    const url = 'http://angular-at.azurewebsites.net/api/airport/fullName';
    const params = new HttpParams().set('name', city);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<string>(url, { params, headers });

  }

  getCode(city: string): Observable<string> {
    const url = 'http://angular-at.azurewebsites.net/api/airport/code';
    const params = new HttpParams().set('name', city);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<string>(url, { params, headers });

  }

}
