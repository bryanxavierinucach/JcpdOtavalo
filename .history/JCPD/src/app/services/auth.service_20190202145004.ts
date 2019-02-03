import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = '';
  constructor(private http: HttpClient ) { }

  loginUser(usuario: string, password: string): Observable<any> {
    const url_api = 'http://localhost:3000/api/Usuarios';
    return this.http.get(url_api);
 
  }
}
