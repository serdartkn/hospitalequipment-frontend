import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicAddComponent } from './components/clinic-add/clinic-add.component';
import { ClinicDeleteComponent } from './components/clinic-delete/clinic-delete.component';
import { ClinicUpdateComponent } from './components/clinic-update/clinic-update.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { EquipmentAddComponent } from './components/equipment-add/equipment-add.component';
import { EquipmentDeleteComponent } from './components/equipment-delete/equipment-delete.component';
import { EquipmentUpdateComponent } from './components/equipment-update/equipment-update.component';
import { EquipmentComponent } from './components/equipment/equipment.component';

const routes: Routes = [
  {path:"", pathMatch:"full",component:EquipmentComponent},
  {path:"clinic/id/:id",component:EquipmentComponent},  
  {path:"clinics",component:ClinicComponent},
  {path:"clinic/add",component:ClinicAddComponent},
  {path:"clinic/update",component:ClinicUpdateComponent},
  {path:"clinic/delete",component:ClinicDeleteComponent},  
  {path:"equipments",component:EquipmentComponent},
  {path:"equipment/add",component:EquipmentAddComponent},
  {path:"equipment/update",component:EquipmentUpdateComponent},
  {path:"equipment/delete",component:EquipmentDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
