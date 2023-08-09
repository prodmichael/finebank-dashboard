import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformNumber',
})
export class TransformNumberPipe implements PipeTransform {
  transform(cardNumber: string) {
    return cardNumber
      .slice(cardNumber.length - 4, cardNumber.length)
      .padStart(16, '*')
      .replace(/(.{4})/g, '$1 ');
  }
}
