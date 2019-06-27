import { Directive, Input, OnInit, OnChanges, OnDestroy, HostBinding } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'mat-error[input]'
})
export class MatErrorInputDirective implements OnChanges, OnDestroy {
  @Input('input')
  private input: AbstractControl;
  private inputSubscripe: Subscription;

  @HostBinding('innerText')
  private innerText: string;

  constructor() { }

  ngOnDestroy() {
    this.inputSubscripe.unsubscribe();
  }

  ngOnChanges() {
    if (!this.input) return;
    this.initializeErrorMessage();
    this.inputSubscripe = this.input
      .valueChanges
      .subscribe(() => this.initializeErrorMessage());
  }

  initializeErrorMessage(): void {
    const objErrors = this.input.errors || {};
    const keyErrors = Object.keys(objErrors);
    this.innerText = null;
    if (keyErrors.length == 0) return;
    this.innerText = this.ErrorMessages[keyErrors[0]] || this.ErrorMessages.invalid;
  }

  private get ErrorMessages() {
    return {
      required: 'The field is required.',
      pattern: 'The field dose not match pattern.',
      invalid: 'The field is invalid.'
    };
  }
}
