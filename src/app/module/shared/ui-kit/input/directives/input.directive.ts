import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInput]',
})
export class InputDirective {
  constructor(
    private ngControl: NgControl,
    public elementRef: ElementRef<HTMLElement>
  ) {}
}
