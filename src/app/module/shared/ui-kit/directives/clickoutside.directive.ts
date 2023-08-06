import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickoutside]',
})
export class ClickoutsideDirective {
  constructor(private elementRef: ElementRef) {}

  @Output() clickOutside = new EventEmitter<void>();

  @HostListener('document: click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    const isMenuClicked = this.elementRef.nativeElement.contains(target);
    if (!isMenuClicked) {
      this.clickOutside.emit();
    }
  }
}
