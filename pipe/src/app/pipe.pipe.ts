import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PipePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let inputArray: string = value.toString();

    let inBrackets: string = inputArray.slice(0,2);
    let threeNumbers: string = inputArray.slice(2,5);
    let firstDuo: string = inputArray.slice(5,7);
    let secondDuo: string = inputArray.slice(7,9);

    return `(${inBrackets}) ${threeNumbers}-${firstDuo}-${secondDuo}`;
  }

}
