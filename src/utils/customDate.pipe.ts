import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true,
})
export class CustomPipePipe implements PipeTransform {
  transform(value: Date | string, visibleDigits: number = 4): string {
    if (value instanceof Date) {
      const day = value.getDate().toString().padStart(2, '0');
      const month = (value.getMonth() + 1).toString().padStart(2, '0');
      const year = value.getFullYear();
      return `${day}/${month}/${year}`;
    } else if (typeof value === 'string') {
      const maskedPart = value.slice(0, -visibleDigits).replace(/./g, '*');
      const visiblePart = value.slice(-visibleDigits);
      return maskedPart + visiblePart;
    }

    return String(value);
  }
}
