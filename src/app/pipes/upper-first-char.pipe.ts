import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirstChar',
  standalone: true
})
export class UpperFirstCharPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}
