import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL, AREA_CHARGE_PROJECTS} from '../constants/api-constants';
import { AreaChargeProjects } from '../class/area-charge-projects';
import { InsertAreaChargeProjects } from '../class/insert-area-charge-projects';

@Injectable({
  providedIn: 'root'
})
export class AreaChargeProjectsService {

  constructor(private http: HttpClient) {}
  getAreaChargeProjects(): Observable<AreaChargeProjects[]> {
    const url = `${API_BASE_URL}${AREA_CHARGE_PROJECTS}`;
    return this.http.get<AreaChargeProjects[]>(url);
  }
  addAreaChargeProjects(data:InsertAreaChargeProjects){
    const url = `${API_BASE_URL}${AREA_CHARGE_PROJECTS}`;
    return this.http.post<any>(url, data);
  }
  editAreaChargeProjects(areaChargeProjects:AreaChargeProjects):Observable<AreaChargeProjects>{
    const url = `${API_BASE_URL}${AREA_CHARGE_PROJECTS}/${areaChargeProjects.id}`;
    return this.http.put<AreaChargeProjects>(url, areaChargeProjects);
  }
  getAreaChargeProjectsById(areaChargeProjectsId: number): Observable<AreaChargeProjects> {
      return this.http.get<AreaChargeProjects>(`${API_BASE_URL}${AREA_CHARGE_PROJECTS}/${areaChargeProjectsId}`);
    }
  //delete
  changeState(areaChargeProjectsId: number,): Observable<AreaChargeProjects> {
    return this.http.put<AreaChargeProjects>(`${API_BASE_URL}${AREA_CHARGE_PROJECTS}/${areaChargeProjectsId}`,null);
  }
}
