import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus: string, propName: string): any {
    const resultArray = [];

    if(value.lenght === 0 || filteredStatus === '') {
      return value;
    }

    for (const item of value) {
      if (item[propName] === filteredStatus) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
