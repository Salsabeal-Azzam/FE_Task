import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {

    console.log(value);

    return value.split("%").join(" ");
  }

}
