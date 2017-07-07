import { Pipe, PipeTransform } from '@angular/core';
import {environment} from "../../environments/environment";

@Pipe({
  name: 'backendPath'
})
export class BackendPathPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return environment.backendUrl + value;
    } else {
      return false;
    }
  }

}
