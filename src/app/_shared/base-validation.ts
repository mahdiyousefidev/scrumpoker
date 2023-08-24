import {Inject, Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Injectable({providedIn: "root"})

export class BaseValidation {

  hasError(formGroup: FormGroup, controlName: string, validator: string): boolean {
    const control = this.getControl(formGroup, controlName)
    return control.hasError(validator) && this.isTouched(formGroup, controlName);
  }

  isInvalid(formGroup: FormGroup, controlName: string): boolean {
    const control = this.getControl(formGroup, controlName)
    return control.invalid && this.isTouched(formGroup, controlName)
  }

  isFormValid(formGroup: FormGroup){
    return formGroup.valid;
  }

  isTouched(formGroup: FormGroup, controlName: string): boolean {
    const control = this.getControl(formGroup, controlName)
    return (control.dirty || control.touched)
  }

  private getControl(formGroup: FormGroup, controlName: string) {
    return formGroup.controls[controlName];
  }
}
