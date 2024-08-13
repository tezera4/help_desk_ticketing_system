import { Component, inject, OnInit } from '@angular/core';
import { GetAllParentCategory } from '../../model/get-all-parent-category';
import { MasterService } from '../../service/master.service';
import { GetAllDepartment } from '../../model/getAllDepartment';
import { AllChildCategoryModel } from '../../model/all-child-category-model';
import { FormsModule } from '@angular/forms';
import { CreateNewTicketModel } from '../../model/create-new-ticket-model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit {

  ngOnInit(): void {
    this.loadParentCategory();
    this.loadDepartment();
  }
  createNewTIcketModel:CreateNewTicketModel={
    "employeeId": 0,
    "severity": "",
    "childCategoryId": 0,
    "deptId": 0,
    "requestDetails": ""
  };
  masterService=inject(MasterService);
  allParentCategoryModel:GetAllParentCategory={
    "message": "",
    "result": false,
    "data": [
      {
        "categoryName": "",
        "deptName": "",
        "categoryId": 0
      }
    ]
  };
  allDeptModel:GetAllDepartment={
    "message": "",
    "result": false,
    "data": [
      {
        "deptId": 0,
        "deptName": "",
        "deptHeadName": "",
        "deptHeadEmpId": 0,
        "createdDate": new Date()
      }
    ]
  };
  allChildCategoryModel:AllChildCategoryModel={
    "message": "",
    "result": false,
    "data": [
      {
        "categoryName": "",
        "parentCategoryName": "",
        "childCategoryId": 0
      }
    ]
  };
   loadDepartment()
   {
     this.masterService.getDepartment().subscribe(
       (res:any)=>{
         if(res.result){
           this.allDeptModel=res;
  
         }
         else{
           alert(res.message);
         }
       }
     )
   }
    loadParentCategory()
    {
      this.masterService.getParentCategory().subscribe(
        (res:any)=>{
          debugger;
          if(res.result){
            this.allParentCategoryModel=res;
  
          }
          else{
            alert(res.message);
          }
        }
      )
    }
    selectedParentCategory:string='';
  loadChildCategory()
  {
    this.masterService.getChildCategoryByParentId(this.selectedParentCategory).subscribe(
      (res:any)=>{
        if(res.result){
          this.allChildCategoryModel=res;

        }
        else{
          alert(res.message);
        }
      }
    )
  }
  onCreateTicket()
  {
    this.masterService.saveNewTicket(this.createNewTIcketModel).subscribe(
      (res:any)=>{
        if(res.result){
          alert("New Ticket Created Successfully")
        }else{
          alert(res.error);
        }

      },
      error=>{
        alert(error.message);
      }
    )

  }
   
}
