import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformNumber',
})
export class TransformNumberPipe implements PipeTransform {
  transform(value: string, defaultValue = 'N/A') {
    if (value) {
      return value
        .slice(value.length - 4, value.length)
        .padStart(16, '*')
        .replace(/(.{4})/g, '$1 ');
    } else {
      return defaultValue;
    }
  }
}
