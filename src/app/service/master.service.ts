import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // let headers = new HttpHeaders()
    // // .set('Authorization', 'Bearer ' + token)
    // .set('Content-Type', 'application/json')
    // .set("Access-Control-Allow-Origin","*")
    // .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    // .set("Access-Control-Allow-Headers", "Content-Type,X-Auth_Token,Origin,Authorization");
    debugger;
   return this.http.post("/api/Tickets/login",loginRequest);
  }
  

  getDepartment()
  {
    //department
    return this.http.get("/api/Tickets/GetDepartments");
  }
}
