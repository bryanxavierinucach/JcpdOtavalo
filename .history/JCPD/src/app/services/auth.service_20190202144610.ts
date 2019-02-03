import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = 'http://localhost:3000/api';
  constructor() { }

  loginUser(usuario: string, password: string): Observable<any> {
    const url_api = this.API_URI/Users;
    return this.http.post(url_api);

  }
}
