import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Clinic } from 'src/app/models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinic-update',
  templateUrl: './clinic-update.component.html',
  styleUrls: ['./clinic-update.component.css']
})
export class ClinicUpdateComponent implements OnInit {
  clinicUpdateForm:FormGroup;
  clinics:Clinic;
  
  
  constructor(private clinicService:ClinicService, private formBuilder:FormBuilder, private toastrService:ToastrService) { }

  ngOnInit() {
  }

  // createClinicUpdateForm(){
  //   this.clinicUpdateForm = this.formBuilder.group({
  //     name:["",Validators.required]
  //   })
  // }


  // add(){
  //   if(this.clinicUpdateForm.valid){
  //    let clinicModel = Object.assign({},this.clinicUpdateForm.value)
  //    this.clinicService.add(clinicModel).subscribe(response =>{
  //      this.toastrService.success(clinicModel.name,response.message)
  //    },responseError=>{
  //      if(responseError.error.Errors.length>0){
  //        for (let i = 0; i < responseError.error.Errors.length; i++) {
  //          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Caution!")          
  //        }        
  //      }     
  //    })    
  //   }else{
  //     this.toastrService.error("Invalid Information")
  //   }
  // }
}
