import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'discountPipe' })
export class discountPipe implements PipeTransform {
  transform(value: number, discount: number): number {
    return (value * 100) / discount;
  }
}

@Pipe({ name: 'moneyPipe' })
export class moneyPipe implements PipeTransform {

  transform(value: any): any {
    if (!isNaN(value)) {
      return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
      return value;
    }
  }

}
