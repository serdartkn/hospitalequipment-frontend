import { Pipe, PipeTransform } from '@angular/core';
import { Equipment } from '../models/equipment';
import { EquipmentDetailsDto } from '../models/equipmentDetailsDto';

@Pipe({
  name: 'filterEquipment'
})
export class FilterEquipmentPipe implements PipeTransform {

  transform(value: EquipmentDetailsDto[], filterText: string): EquipmentDetailsDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText ? value.filter((e: EquipmentDetailsDto) =>e.equipmentName.toLocaleLowerCase().indexOf(filterText) !== -1 ): value;
  }
  
}
