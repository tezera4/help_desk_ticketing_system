import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/login-request';
import { CreateDepartment } from '../model/create-department';
import { GetAllParentCategory } from '../model/get-all-parent-category';

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
    // debugger;
   return this.http.post("/api/Tickets/login",loginRequest);
  }
  

  getDepartment()
  {
    //department
    return this.http.get("/api/Tickets/GetDepartments");
  }
  createDepartment(createDepartment:CreateDepartment)
  {
    debugger;
    return this.http.post("/api/Tickets/CreateDepartment",createDepartment);
  }
  deleteDepartment(deptId:number)
  {
    debugger;
    return this.http.delete("/api/Tickets/DeleteDepartment?id="+deptId);
  }

  updateDepartment(updateDepartment:any)
  {
   
    return this.http.put("/api/Tickets/UpdateDepartment",updateDepartment);
  }

  getParentCategory()
  {
    debugger;
    //department
    return this.http.get("/api/TicketsNew/GetParentCategory");
  }
  createParentCategory(createParentCategory:GetAllParentCategory)
  {
    debugger;
    return this.http.post("/api/Tickets/CreateDepartment",createParentCategory);
  }
  deleteParentCategory(deptId:number)
  {
    debugger;
    return this.http.delete("/api/Tickets/DeleteParentCategory?id="+deptId);
  }

  updateParentCategory(updateParentCategory:any)
  {
   
    return this.http.put("/api/Tickets/UpdateParentCategory",updateParentCategory);
  }
}
