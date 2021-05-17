import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinic } from '../models/clinic';
import { ListResponseModel } from '../models/listResponseModel';
import {HttpClient} from '@angular/common/http'
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient:HttpClient) { }

  getClinics():Observable<ListResponseModel<Clinic>>{
    let newPath = this.apiUrl + 'clinics/getall';
    return this.httpClient.get<ListResponseModel<Clinic>>(newPath);
  }

  getClinicsById(id:number):Observable<ListResponseModel<Clinic>>{
    let newPath = this.apiUrl + 'clinics/getbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<Clinic>>(newPath);
  }

  add(clinic: Clinic):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "clinics/add", clinic)
  }

}
