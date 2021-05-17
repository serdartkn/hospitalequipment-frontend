import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Clinic } from 'src/app/models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';
import { EquipmentService } from 'src/app/services/equipment.service';


@Component({
  selector: 'app-equipment-add',
  templateUrl: './equipment-add.component.html',
  styleUrls: ['./equipment-add.component.css']
})
export class EquipmentAddComponent implements OnInit {
  equipmentAddForm:FormGroup;
  clinics:Clinic[]=[]
  
  constructor(private clinicService:ClinicService, private formBuilder:FormBuilder, private toastrService:ToastrService, private equipmentService:EquipmentService) { }

  ngOnInit() {

    this.getClinics()
    this.createEquipmentAddForm();
  }

  getClinics(){
    this.clinicService.getClinics().subscribe(response=>{
      this.clinics = response.data;
      console.log(response)
    });
  }

  createEquipmentAddForm(){
    this.equipmentAddForm = this.formBuilder.group({
      clinicId:["",Validators.required], 
      name:["",Validators.required], 
      procurementDate:["",Validators.required], 
      unitPrice:["",Validators.required], 
      unitsInStock:["",Validators.required], 
      usageRate:["",Validators.required]
    })
 }

 add(){
   if(this.equipmentAddForm.valid){
    let equipmentModel =Object.assign({},this.equipmentAddForm.value)
    this.equipmentService.add(equipmentModel).subscribe(response =>{
      this.toastrService.success(equipmentModel.name,response.message)
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Caution!")          
        }        
      }     
    })    
   }else{
     this.toastrService.error("Invalid Information")
   }
 }
}