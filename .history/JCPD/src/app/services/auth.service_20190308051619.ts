import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = '';
  private userUrl = 'http://localhost:3000/api/test/user';
  private pmUrl = 'http://localhost:3000/api/test/pm';
  private adminUrl = 'http://localhost:3000/api/test/admin';

  constructor(private http: HttpClient ) { }

  
}
