import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { NaviComponent } from './components/navi/navi.component';
import { FilterClinicPipe } from './pipes/filter-clinic.pipe';
import { FilterEquipmentPipe } from './pipes/filter-equipment.pipe';
import { ClinicAddComponent } from './components/clinic-add/clinic-add.component';
import { ClinicUpdateComponent } from './components/clinic-update/clinic-update.component';
import { ClinicDeleteComponent } from './components/clinic-delete/clinic-delete.component';
import { EquipmentDeleteComponent } from './components/equipment-delete/equipment-delete.component';
import { EquipmentUpdateComponent } from './components/equipment-update/equipment-update.component';
import { EquipmentAddComponent } from './components/equipment-add/equipment-add.component';
import { PagelistPipe } from './pipes/pagelist.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClinicComponent,
    EquipmentComponent,
    NaviComponent,
    FilterClinicPipe,
    FilterEquipmentPipe,
    ClinicAddComponent,
    ClinicUpdateComponent,
    ClinicDeleteComponent,
    EquipmentDeleteComponent,
    EquipmentUpdateComponent,
    EquipmentAddComponent,
    PagelistPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
