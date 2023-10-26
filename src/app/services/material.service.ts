import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL,MATERIAL } from '../constants/api-constants';
import { Material } from '../class/material';
import { InsertMaterial } from '../class/insert-material';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) {}
  getMaterial(): Observable<Material[]> {
    const url = `${API_BASE_URL}${MATERIAL}`;
    return this.http.get<Material[]>(url);
  }
  addMaterial(data:InsertMaterial){
    const url = `${API_BASE_URL}${MATERIAL}`;
    return this.http.post<any>(url, data);
  }
  editMaterial(material:Material):Observable<Material>{
    const url = `${API_BASE_URL}${MATERIAL}/${material.id}`;
    return this.http.put<Material>(url, material);
  }
  changeState(materialId: number,): Observable<Material> {
    return this.http.put<Material>(`${API_BASE_URL}${MATERIAL}/${materialId}`,null);
  }
  getMaterialById(materialId: number): Observable<Material> {
    return this.http.get<Material>(`${API_BASE_URL}${MATERIAL}/${materialId}`);
  }
}
