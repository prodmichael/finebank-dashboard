import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spacing',
  templateUrl: './app-spacing.component.html',
  styleUrls: ['./app-spacing.component.scss'],
})
export class AppSpacingComponent {
  @Input() type:
    | 'l1'
    | 'l2'
    | 'l3'
    | 'l3-5'
    | 'l4'
    | 'l5'
    | 'l6'
    | 'l7'
    | 'l8'
    | 'l9'
    | null = null;
  @Input() customSpace: number = 0;
}
