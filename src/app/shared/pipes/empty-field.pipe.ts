import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty'
})
export class EmptyFieldPipe implements PipeTransform {

  transform(value: any): string {
    if (value == null) return "N/A";
    else return value;
  }

}
