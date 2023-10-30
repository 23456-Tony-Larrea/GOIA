import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, CHARGE } from '../constants/api-constants';
import { Charge } from '../class/Charge';


@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  constructor(private http: HttpClient) {}


  getCharge(): Observable<Charge[]> {
    const url = `${API_BASE_URL}${CHARGE}`;
    return this.http.get<Charge[]>(url);
  }
  addCharge(data:{name:string}){
    const url = `${API_BASE_URL}${CHARGE}`;
    return this.http.post<any>(url, data);
  }
  editCharge(charge:Charge):Observable<Charge>{
    const url = `${API_BASE_URL}${CHARGE}/${charge.id}`;
    return this.http.put<Charge>(url, charge);
  }
  changeState(chargeId: number): Observable<Charge> {
    return this.http.put<Charge>(`${API_BASE_URL}${CHARGE}/change-state/${chargeId}`,null);
  }
  //by id
  getChargeById(chargeId: number): Observable<Charge> {
    return this.http.get<Charge>(`${API_BASE_URL}${CHARGE}/${chargeId}`);
  }
}
