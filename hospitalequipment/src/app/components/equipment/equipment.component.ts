import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';
import {HttpClient} from '@angular/common/http'
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { EquipmentService } from 'src/app/services/equipment.service';
import { EquipmentDetailsDto } from 'src/app/models/equipmentDetailsDto';
import { ActivatedRoute } from '@angular/router';
import { Pager } from 'src/app/Pager/pager';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
// equipments:Equipment[]=[];
equipmentsDetails:EquipmentDetailsDto[]=[];
dataLoaded = false;
currentEquipment : EquipmentDetailsDto;
filterText = "";

constructor(private equipmentService:EquipmentService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getEquipmentDetailsByClinic(params["id"]);
      } else{
        this.getEquipmentsDetails();
      }
    }) 

  }

  // getEquipments(){
  //   this.equipmentService.getEquipments().subscribe(response=>{
  //     this.equipments = response.data;
  //     this.dataLoaded = true;
  //   })
  // }

  getEquipmentsDetails(){
    this.equipmentService.getEquipmentsDetails().subscribe(response=>{
      this.equipmentsDetails = response.data;
      this.dataLoaded = true;
      }) 
  }

  getEquipmentDetailsByClinic(id:number){
    this.equipmentService.getEquipmentsDetailByClinic(id).subscribe(response=>{
      this.equipmentsDetails = response.data
      this.dataLoaded=true;
      })      
  }

  clearCurrentEquipment() {
    this.currentEquipment = null;
    this.filterText = null;
  }

  getAllEquipmentClass() {
    if (!this.currentEquipment) {
      return 'list-group-item list-group-item-info text-center';
    } else {
      return 'list-group-item list-group-item-info text-center';
    }
  }

}