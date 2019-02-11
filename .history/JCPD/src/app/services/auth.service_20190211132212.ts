import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = '';
  constructor(private http: HttpClient ) { }

}
