import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/login-request';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiURL:string='https://freeapi.miniprojectideas.com/api/Tickets/';

  constructor(private http:HttpClient) { }
  login(loginRequest:LoginRequest)
  {
    debugger;
   return this.http.post("https://freeapi.miniprojectideas.com/api/Tickets/login",loginRequest);
  }
}
