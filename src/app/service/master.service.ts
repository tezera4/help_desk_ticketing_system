import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/login-request';
import { CreateDepartment } from '../model/create-department';
import { GetAllParentCategory } from '../model/get-all-parent-category';
import { CreateCategory } from '../model/create-category';
import { CreateChildCategoryModel } from '../model/create-child-category-model';
import { CreateEmployeeModel } from '../model/create-employee-model';
import { CreateNewTicketModel } from '../model/create-new-ticket-model';

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
   return this.http.post("/api/TicketsNew/login",loginRequest);
  }
  

  getDepartment()
  {
    //department
    return this.http.get("/api/TicketsNew/GetDepartments");
  }
  createDepartment(createDepartment:CreateDepartment)
  {
    debugger;
    return this.http.post("/api/TicketsNew/CreateDepartment",createDepartment);
  }
  deleteDepartment(deptId:number)
  {
    debugger;
    return this.http.delete("/api/TicketsNew/DeleteDepartment?id="+deptId);
  }

  updateDepartment(updateDepartment:any)
  {
   
    return this.http.put("/api/TicketsNew/UpdateDepartment",updateDepartment);
  }

  getParentCategory()
  {
    debugger;
   
    return this.http.get("/api/TicketsNew/GetParentCategory");
  }
  createParentCategory(createParentCategory:CreateCategory)
  {
    debugger;
    return this.http.post("/api/TicketsNew/createParentCategory",createParentCategory);
  }
  deleteParentCategory(categoryId:number)
  {
    debugger;
    return this.http.delete("/api/TicketsNew/DeleteParentCategory?id="+categoryId);
  }
//update category is not implemented
  updateParentCategory(updateParentCategory:any)
  {
   
    return this.http.put("/api/TicketsNew/UpdateParentCategory",updateParentCategory);
  }

  //childparentCategory

  getAllChildCategory()
  {
    debugger;
    //department
    return this.http.get("/api/TicketsNew/GetChildCategory");
  }
  createChildCategory(createChildCategoryModel:CreateChildCategoryModel)
  {
    debugger;
    return this.http.post("/api/TicketsNew/createChildCategory",createChildCategoryModel);
  }
  deleteChildCategory(childCategoryId:number)
  {
    debugger;
    return this.http.delete("/api/TicketsNew/DeleteChildCategory?id="+childCategoryId);
  }
//update category is not implemented
  updateChildCategory(updateChildCategory:any)
  {
   
    return this.http.put("/api/TicketsNew/UpdateChildCategory",updateChildCategory);
  }
  //employee

  getAllEmployees()
  {
    debugger;
    //department
    return this.http.get("/api/TicketsNew/GetEmployees");
  }
  createEmployee(createEmployeeModel:CreateEmployeeModel)
  {
    debugger;
    return this.http.post("/api/TicketsNew/CreateEmployee",createEmployeeModel);
  }
  deleteEmployee(employeeId:number)
  {
    debugger;
    return this.http.delete("/api/TicketsNew/DeleteEmployee?id="+employeeId);
  }
//update category is not implemented
  updateEmployee(updateEmployee:any)
  {
   
    return this.http.put("/api/TicketsNew/UpdateEmployee",updateEmployee);
  }

  getChildCategoryByParentId(parentId:string)
  {
    return this.http.get("/api/TicketsNew/GetChildCategoryByParentId?id="+parentId);
  }
  saveNewTicket(createNewTIcket:CreateNewTicketModel)
  {
    return this.http.post("/api/TicketsNew/CreateNewTicket",createNewTIcket);
  }
}
