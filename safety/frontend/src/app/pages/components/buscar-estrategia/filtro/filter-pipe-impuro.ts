import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrayPipe } from './filter-pipe';


@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

}
