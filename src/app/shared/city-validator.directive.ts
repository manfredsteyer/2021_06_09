import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator {

  @Input() city: string = '';
  @Input() strict: 'strict' | 'lax' = 'strict';

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const cityToValidate = control.value;
    const allowedCities = this.city.split(',');

    if (!cityToValidate) {
      return {};
    }

    if (allowedCities.includes(cityToValidate)) {
      return {};
    }

    return {
      city: {
        actualCity: cityToValidate,
        allowedCities: allowedCities,
        reason: 4444,
        tryAgain: 2022
      }
    };


  }

}
