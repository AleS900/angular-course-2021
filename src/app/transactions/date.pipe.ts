import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newDate = new Date(value)
    return '07/09/2020';
  }

}