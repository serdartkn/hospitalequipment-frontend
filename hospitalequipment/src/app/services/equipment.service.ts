import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Equipment } from '../models/equipment';
import { EquipmentDetailsDto } from '../models/equipmentDetailsDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient:HttpClient) { }

  getEquipments():Observable<ListResponseModel<Equipment>>{
    let newPath = this.apiUrl + 'equipments/getall';
    return this.httpClient.get<ListResponseModel<Equipment>>(newPath);
  };

  getEquipmentsDetails():Observable<ListResponseModel<EquipmentDetailsDto>>{
    let newPath = this.apiUrl + 'equipments/getequipmentdetails';
    return this.httpClient.get<ListResponseModel<EquipmentDetailsDto>>(newPath);
  };

  getEquipmentsDetailByClinic(id: number): Observable<ListResponseModel<EquipmentDetailsDto>> {
    let newPath = this.apiUrl + 'equipments/getequipmentdetailsbyclinic?id=' + id;
    return this.httpClient.get<ListResponseModel<EquipmentDetailsDto>>(newPath);
  }

  add(equipment: Equipment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "equipments/add", equipment)
  }


}
