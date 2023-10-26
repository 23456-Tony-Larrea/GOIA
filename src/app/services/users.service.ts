import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, UPDATE_USERS, USERS_ENDPOINT, USERS_ROLES ,REGISTER_USERS} from '../constants/api-constants';
import { User } from '../class/Users'; // Importa la clase de modelo de usuario
import { Roles } from '../class/Roles';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = `${API_BASE_URL}${USERS_ENDPOINT}`;
    return this.http.get<User[]>(url);
  }
  getRoles(): Observable<Roles[]> {
    const url = `${API_BASE_URL}${USERS_ROLES}`;
    return this.http.get<Roles[]>(url);
  }
  //EDITAR
  editUser(user: User): Observable<User> {
    const url = `${API_BASE_URL}${UPDATE_USERS}/${user.id}`;
    return this.http.put<User>(url, user);
  }
  changeState(userId: number,): Observable<User> {
    return this.http.put<User>(`${API_BASE_URL}${USERS_ENDPOINT}/${userId}`,null);
  }
  registerUser(data: { email: string, password:string, name: string, roleId: number }): Observable<any> {
    const url = `${API_BASE_URL}${REGISTER_USERS}`;
    return this.http.post<any>(url, data);
  }
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${API_BASE_URL}${USERS_ENDPOINT}/${userId}`);
  }
}
