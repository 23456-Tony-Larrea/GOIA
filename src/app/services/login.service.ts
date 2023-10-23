import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, LOGIN_ENDPOINT } from '../constants/api-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginUrl = `${API_BASE_URL}${LOGIN_ENDPOINT}`;
    const credentials = { email, password };
    return this.http.post(loginUrl, credentials);
  }

}
