import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundTripDirective,
      multi: true
    }
  ]
})
export class RoundTripDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const form = control as FormGroup;

    const from = form.controls['from'];
    const to = form.controls['to'];

    if (!from || !to) {
      return {};
    }

    if (from.value === to.value) {
      return {
        roundTrip: true
      }
    }

    return {};

  }

}
