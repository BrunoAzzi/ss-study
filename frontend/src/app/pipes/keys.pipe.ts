import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value: Object): any {
    const keys = [];
    for (const key in value) {
      if (!isNaN(parseInt(key, 10))) {
        keys.push({key: key, value: value[key]});
      }
    }
    return keys;
  }
}
