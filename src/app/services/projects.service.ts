import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, PROJECTS } from '../constants/api-constants';
import { Projects } from '../class/projects';
import {InsertProject} from '../class/insert-project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) {}
  getProjects(): Observable<Projects[]> {
    const url = `${API_BASE_URL}${PROJECTS}`;
    return this.http.get<Projects[]>(url);
  }
  addProjects(data:InsertProject){
    const url = `${API_BASE_URL}${PROJECTS}`;
    return this.http.post<any>(url, data);
  }
  editProjects(projects:Projects):Observable<Projects>{
    const url = `${API_BASE_URL}${PROJECTS}/${projects.id}`;
    return this.http.put<Projects>(url, projects);
  }
 getProjectsById(projectsId: number): Observable<Projects> {
    return this.http.get<Projects>(`${API_BASE_URL}${PROJECTS}/${projectsId}`);
  }
  //delete 
  changeState(projectsId: number,): Observable<Projects> {
    return this.http.put<Projects>(`${API_BASE_URL}${PROJECTS}/${projectsId}`,null);
  }

}
