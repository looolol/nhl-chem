import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortMoney'
})
export class ShortMoneyPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value == null) return '';

    if (value >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (value >= 1_000) {
      return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    return value.toString();
  }
}
