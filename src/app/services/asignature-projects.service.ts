import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL,ASIGNATURE_PROJECTS } from '../constants/api-constants';
import { AsignatureProjects } from '../class/asignature-projects';
import { InsertAsignatureProjects } from '../class/insert-asignature-projects';



@Injectable({
  providedIn: 'root'
})
export class AreaChargeProjectsService {

  constructor(private http: HttpClient) {}
  getAsignatureProjects(): Observable<AsignatureProjects[]> {
    const url = `${API_BASE_URL}${ASIGNATURE_PROJECTS}`;
    return this.http.get<AsignatureProjects[]>(url);
  }
  addAsignatureProjects(data:InsertAsignatureProjects){
    const url = `${API_BASE_URL}${ASIGNATURE_PROJECTS}`;
    return this.http.post<any>(url, data);
  }
  editAsignatureProjects(asignatureProjects:AsignatureProjects):Observable<AsignatureProjects>{
    const url = `${API_BASE_URL}${ASIGNATURE_PROJECTS}/${asignatureProjects.id}`;
    return this.http.put<AsignatureProjects>(url, asignatureProjects);
  }
  getAsignatureProjectsById(asignatureProjectsId: number): Observable<AsignatureProjects> {
      return this.http.get<AsignatureProjects>(`${API_BASE_URL}${ASIGNATURE_PROJECTS}/${asignatureProjectsId}`);
    }
  //delete
  changeState(asignatureProjectsId: number,): Observable<AsignatureProjects> {
    return this.http.put<AsignatureProjects>(`${API_BASE_URL}${ASIGNATURE_PROJECTS}/${asignatureProjectsId}`,null);
  }
}
