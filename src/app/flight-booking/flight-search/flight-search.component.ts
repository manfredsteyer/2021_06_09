import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { DefaultFlightService, FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [{
    provide: FlightService,
    useClass: DefaultFlightService
  }]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;
// 
  delayFilter = false;

  basket = {
    "3": true,
    "5": true
  };

  // private http: HttpClient;

  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  constructor(private flightService: FlightService) {
  
    // alert(window.innerHeight);
    // alert(window.innerWidth);

  }

  ngOnInit(): void {
  }

  search(): void {

    if (!this.to || !this.from) {
      return;
    }

    this.flightService.find(this.from, this.to).subscribe(
      (flights) => {
        this.flights = flights;
      },
      (err) => {
        console.error('err', err);
      }
    )

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
