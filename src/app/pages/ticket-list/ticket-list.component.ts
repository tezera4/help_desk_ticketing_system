import { Component, inject, OnInit } from '@angular/core';
import { AllTicketCreatedByEmpIdModel, AllTicketCreatedByEmpIdModelData } from '../../model/all-ticket-created-by-emp-id-model';
import { TicketService } from '../../service/ticket.service';
import { AllTicketAssignedToLoggedInUserModel } from '../../model/all-ticket-assigned-to-logged-in-user-model';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {

  ngOnInit(): void {
   
    
  }
  private ticketService=inject(TicketService);

  mode:string='my ticket';
  ChangeMode(modeFromComponent:any)
  {
    console.log("inside ChangeMode===================")
    this.mode=modeFromComponent;
    this.getAllTicketCreatedandAssignedByLoggedInEmp(this.mode);

  }
  allTicketCreatedByEmpIdList!:AllTicketCreatedByEmpIdModel;
  allTicketAssignedTologgedInEmpList!:AllTicketAssignedToLoggedInUserModel;

getAllTicketCreatedandAssignedByLoggedInEmp(mode:string){
  console.log("inside getAllTicketCreatedandAssignedByLoggedInEmp===================")
  if(mode=='my ticket'){
    this.ticketService.getTicketCreatedByLoggedInEmployee(this.ticketService.loginUserId).subscribe(
      (res:any)=>{
        if(res.result){
          console.log("Ticket created===============",res.data);
          this.allTicketCreatedByEmpIdList=res;
  
        }
        else{
          alert(res.result);
        }
      }
    )
  }
  else{
    this.ticketService.getTicketAssignedToLoggedInEmployee(282).subscribe(
      (res:any)=>{
        if(res.result){
          console.log("Ticket created===============",res.data);
          this.allTicketAssignedTologgedInEmpList=res;
  
        }
        else{
          alert(res.result);
        }
      }
    )

  }

}


}
