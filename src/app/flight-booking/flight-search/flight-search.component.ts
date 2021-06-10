import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: HttpClient;

  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
  }

  search(): void {
  
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
