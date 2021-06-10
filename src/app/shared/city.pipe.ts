import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: 'short' | 'long'): string {

    let long, short;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz-Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel -- Helmut Schmidt';
        break;
      default:
        short = long = value; 
    }

    if (fmt === 'short') {
      return short;
    }
    else {
      return long;
    }

  }

}
