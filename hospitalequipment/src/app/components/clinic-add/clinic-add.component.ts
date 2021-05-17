import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinic-add',
  templateUrl: './clinic-add.component.html',
  styleUrls: ['./clinic-add.component.css']
})
export class ClinicAddComponent implements OnInit {
  clinicAddForm:FormGroup;

  constructor(private clinicService:ClinicService, private formBuilder:FormBuilder, private toastrService:ToastrService) { }

  ngOnInit() :void{
    this.createClinicAddForm();
  }

  createClinicAddForm(){
    this.clinicAddForm = this.formBuilder.group({
      name:["",Validators.required]
    })
  }

 add(){
   if(this.clinicAddForm.valid){
    let clinicModel = Object.assign({},this.clinicAddForm.value)
    this.clinicService.add(clinicModel).subscribe(response =>{
      this.toastrService.success(clinicModel.name,response.message)
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
