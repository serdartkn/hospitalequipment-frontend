import { Pipe, PipeTransform } from '@angular/core';
import { Clinic } from '../models/clinic';

@Pipe({
  name: 'filterClinic'
})
export class FilterClinicPipe implements PipeTransform {

  transform(value: Clinic[], filterText: string): Clinic[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText ? value.filter((c: Clinic) =>c.name.toLocaleLowerCase().indexOf(filterText) !== -1 ): value;
  }

}