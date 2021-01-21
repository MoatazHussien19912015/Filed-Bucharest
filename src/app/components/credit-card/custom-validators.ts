import {AbstractControl, ValidationErrors, AsyncValidatorFn} from '@angular/forms';




export class CustomValidators {

  constructor() { }
  static outdated(c: AbstractControl): ValidationErrors | null {
   if (new Date(c.value).valueOf() < new Date().valueOf()) { 
      return { outdated: true };
   }
   return null;
}


}