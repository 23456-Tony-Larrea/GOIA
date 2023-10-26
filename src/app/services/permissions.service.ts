import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL,USERS_ROLES ,ROLE_PERMISSSIONS,PERMISSIONS} from '../constants/api-constants';
import { Roles } from '../class/Roles';
import { Observable } from 'rxjs';
import { Permission } from '../class/Permission';
import { RolePermission } from '../class/RolePermissions';


@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  constructor(private http: HttpClient) {}
  addRoles(data:{name:string}){
    const url = `${API_BASE_URL}${USERS_ROLES}`;
    return this.http.post<any>(url, data);
  }
  editRoles(roles:Roles):Observable<Roles>{
    const url = `${API_BASE_URL}${USERS_ROLES}/${roles.id}`;
    return this.http.put<Roles>(url, roles);
  }
  //delete roles
  deleteRoles(rolesId: number): Observable<Roles> {
    return this.http.delete<Roles>(`${API_BASE_URL}${USERS_ROLES}/${rolesId}`);
  }
  //get roles BY ID FOR ROLE_PERMISSIONS
  getRolesById(rolesId: number): Observable<any[]> {
    return this.http.get<any[]>(`${API_BASE_URL}${ROLE_PERMISSSIONS}/${rolesId}`);
  }
  //UPDATE ROLES BY ID AND PERMISSION BY ID FOR ROLE_PERMISSIONS
  updateRolesPermissions(rolesId: number,permissionId:number,state:boolean): Observable<Roles> {
    return this.http.put<Roles>(`${API_BASE_URL}${ROLE_PERMISSSIONS}/${rolesId}/${permissionId}`,state);
  }
  //GET PERMISSIONS
  getPermissions(): Observable<Permission[]> {
    const url = `${API_BASE_URL}${PERMISSIONS}`;
    return this.http.get<Permission[]>(url);
  }

}

