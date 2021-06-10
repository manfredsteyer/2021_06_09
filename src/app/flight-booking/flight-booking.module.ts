import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { DefaultFlightService, DummyFlightService, FlightService } from './flight-search/flight.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { StatusToggleComponent } from './status-toggle/status-toggle.component';

const DEBUG = false;

@NgModule({
   imports: [
      CommonModule, 
      FormsModule, 
      SharedModule
   ],
   declarations: [
      FlightSearchComponent,
      FlightCardComponent,
      StatusToggleComponent
   ],
   exports: [
      FlightSearchComponent
   ],
   providers: [
      {
         provide: FlightService,
         useFactory: (http: HttpClient) => {
            if (DEBUG) {
               return new DummyFlightService();
            }
            else {
               return new DefaultFlightService(http);
            }
         },
         deps: [HttpClient]
      }

   ],
})
export class FlightBookingModule { }
