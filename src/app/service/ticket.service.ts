import { Injectable } from '@angular/core';
import { CreateNewTicketModel } from '../model/create-new-ticket-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  loginUserId:number=0;

  saveNewTicket(createNewTIcket:CreateNewTicketModel)
  {
    debugger;
    createNewTIcket.employeeId=this.loginUserId;
    return this.http.post("/api/TicketsNew/CreateNewTicket",createNewTIcket);
  }

  getTicketCreatedByLoggedInEmployee(empId:number)
  {
    return this.http.get("/api/TicketsNew/GetTicketsCreatedByEmpId?empId="+empId);

  }

  getTicketAssignedToLoggedInEmployee(empId:number)
  {
    return this.http.get("/api/TicketsNew/GetAssignedTicketsByEmpId?empId="+empId);

  }
  
}
