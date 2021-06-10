import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../model/flight';



@Injectable()
export class DummyFlightService implements FlightService {
  
  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 17, from: 'Graz', to: 'Flagranti', date: '2020-02-20T20:20+02:00', delayed: false },
      { id: 18, from: 'Graz', to: 'Kognito', date: '2020-02-20T20:30+02:00', delayed: false },
      { id: 19, from: 'Graz', to: 'Mallorca', date: '2020-02-20T20:40+02:00', delayed: false },

    ]);
  }

}

// Konkrete Services: immer Injectable
@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
                          .set('Accept', 'application/json'); // v

                          // .set('Content-Type', 'application/json');


    const params = new HttpParams()
                          .set('from', from)
                          .set('to', to);

    return this.http.get<Flight[]>(url, { headers, params });
  }

}


// Neue Schreibweise:
// @Injectable({
//   providedIn: 'root', // LazyModule
//   useClass: DummyFlightService
// })

export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}