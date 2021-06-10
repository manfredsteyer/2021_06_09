import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../model/flight';

@Pipe({
  name: 'statusFilter',
  pure: true
})
export class StatusFilterPipe implements PipeTransform {

  transform(flights: Flight[], delayFilter: boolean): Flight[] {
    return flights.filter(f => f.delayed === delayFilter);
  }

}
