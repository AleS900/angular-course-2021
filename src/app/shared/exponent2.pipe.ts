import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'exponent2'
})

export class ExponentPipe2 implements PipeTransform {

  transform(value: number, exponent2?:number): number {
    return Math.pow(value, isNaN(exponent2) ? 1 : exponent2);
  }

}