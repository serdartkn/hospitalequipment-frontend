import { Component, OnInit } from '@angular/core';
import { Clinic } from 'src/app/models/clinic';

import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
  clinics:Clinic[]=[];
  currentClinic:Clinic;
  dataLoaded = false;
  filterText = "";

  constructor(private clinicService:ClinicService) { }

  ngOnInit():void {

    this.getClinics();
  }

  getClinics(){
    this.clinicService.getClinics().subscribe(response=>{
      this.clinics = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentClinic(clinic:Clinic){    
    this.currentClinic = clinic;
  }

  getClinicClass(clinic:Clinic){

    if(clinic==this.currentClinic){
      return 'list-group-item active';
    }
    else{
      return 'list-group-item';
    }
  }

  clearCurrentClinic() {
    this.currentClinic = null;
    this.filterText = null;
  }

  getAllClinicClass() {
    if (!this.currentClinic) {
      return 'list-group-item list-group-item-info text-center';
    } else {
      return 'list-group-item list-group-item-info text-center';
    }
  }
}
