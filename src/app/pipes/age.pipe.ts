import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(yearBuilt: number): string {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearBuilt;
    return `Construit il y a ${age} ans`;
  }
}
