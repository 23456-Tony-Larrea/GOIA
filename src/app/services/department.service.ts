import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, DEPARTMENT } from '../constants/api-constants';
import { Department } from '../class/Department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) {}
  getDepartment(): Observable<Department[]> {
    const url = `${API_BASE_URL}${DEPARTMENT}`;
    return this.http.get<Department[]>(url);
  }
  addDepartment(data:{name:string}){
    const url = `${API_BASE_URL}${DEPARTMENT}`;
    return this.http.post<any>(url, data);
  }
  editDepartment(department:Department):Observable<Department>{
    const url = `${API_BASE_URL}${DEPARTMENT}/${department.id}`;
    return this.http.put<Department>(url, department);
  }
  changeState(departmentId: number,): Observable<Department> {
    return this.http.put<Department>(`${API_BASE_URL}${DEPARTMENT}/change-state/${departmentId}`,null);
  }
  getDepartmentById(departmentId: number): Observable<Department> {
    return this.http.get<Department>(`${API_BASE_URL}${DEPARTMENT}/${departmentId}`);
  }
}
