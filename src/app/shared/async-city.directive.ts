import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FlightService } from '../flight-booking/flight-search/flight.service';
import { catchError, delay, map } from 'rxjs/operators';

@Directive({
  selector: '[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityDirective,
      multi: true
    }
  ]
})
export class AsyncCityDirective implements AsyncValidator {

  constructor(private flightSerivce: FlightService) { }

  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    const value = control.value;

    // Observable<Flight[]> ---> Observable<ValidationErrors>
    // import { catchError, delay, map } from 'rxjs/operators';
    return this.flightSerivce.find(value, '').pipe(
      map(flights => {
        if (flights.length > 0) {
          return {};
        }
        else {
          return {
            asyncCity: {
              didYouMean: ['Wien 1', 'Wien 2']
            },
            anotherOne: true
          }
        }
      }),
      catchError(err => {
        console.error('err', err);
        return of({
          // network: true
        })
      })
    );


  }
  
}
