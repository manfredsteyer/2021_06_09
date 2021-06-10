import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportService } from './airport.service';

@Pipe({
  name: 'asyncCity',
  pure: true
})
export class AsyncCityPipe implements PipeTransform {

  constructor(private airport: AirportService) {
  }

  transform(city: string, fmt: 'short' | 'long'): Observable<string> {
    
    if (fmt === 'short') {
      return this.airport.getCode(city);
    }

    return this.airport.getFullName(city);

  }

}
