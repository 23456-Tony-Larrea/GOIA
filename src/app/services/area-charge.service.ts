import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, AREA_CHARGE } from '../constants/api-constants';
import { AreaCharge } from '../class/area-charge';


@Injectable({
  providedIn: 'root'
})
export class AreaChargeService {

  constructor(private http: HttpClient) {}
  getAreaCharge():Observable<AreaCharge[]>{
    const url = `${API_BASE_URL}${AREA_CHARGE}`;
    return this.http.get<AreaCharge[]>(url);
  } 
  addAreaCharge(data:{name:string,description:string,userId:any}){
    const url = `${API_BASE_URL}${AREA_CHARGE}`;
    return this.http.post<any>(url, data);
  }
  editAreaCharge(areaCharge:AreaCharge):Observable<AreaCharge>{
    const url = `${API_BASE_URL}${AREA_CHARGE}/${areaCharge.id}`;
    return this.http.put<AreaCharge>(url, areaCharge);
  }
  changeState(areaChargeId: number,): Observable<AreaCharge> {
    return this.http.put<AreaCharge>(`${API_BASE_URL}${AREA_CHARGE}/${areaChargeId}`,null);
  }
  //by id
  getAreaChargeById(areaChargeId: number): Observable<AreaCharge> {
    return this.http.get<AreaCharge>(`${API_BASE_URL}${AREA_CHARGE}/${areaChargeId}`);
  }
}
