import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private router: Router,
    private httpClient: HttpClient) {
  }

  login(email: string, password: string) {
    const htppParams: HttpParams = new HttpParams().append('email', email).append('password', password);
    return this.httpClient.post('/api/login', htppParams);
  }
}
