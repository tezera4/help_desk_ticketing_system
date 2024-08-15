import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { GetAllDepartment } from '../../model/getAllDepartment';
import { AsyncPipe, DatePipe } from '@angular/common';
import { CreateDepartment } from '../../model/create-department';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe, FormsModule,MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    RouterOutlet,
    MatButtonModule, 
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {
  ngOnInit(): void {
    this.loadDepartment();
  }
  private masterService=inject(MasterService);
  getAllDept:GetAllDepartment={
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
  // getAllDept:GetAllDepartment[]=[];
  createDepartment:CreateDepartment={
  deptId:0,
  createdDate:"",
  deptHeadEmpId:'122',
  deptName:'',

  };

  deptId:string='';

  loadDepartment()
  {
    this.masterService.getDepartment().subscribe(
      (res:any)=>{
        if(res.result){
          this.getAllDept=res;

        }
        else{
          alert(res.message);
        }
      }
    )
  }
  onCreateDepartment(){
    debugger;
  
      this.masterService.createDepartment(this.createDepartment).subscribe(
        (res:any)=>{
          if(res.result){
            console.log(res);
            alert("Department is created successfully");
  
          }else{
            alert(res.message);
          }
  
        }
      )

   
 
  }

  onDeleteDepartment(deptIds:number){
    debugger;
    console.log("deptIds===",deptIds)
if(confirm("are you sure you want to delete?")){
  this.masterService.deleteDepartment(deptIds).subscribe(
    (res:any)=>{
      if(res.result){
        console.log(res);
        alert("Department is deleted successfully");
        this.loadDepartment();

      }else{
        alert(res.message);
      }

    }
  )
}
  }
  UpdateDepartment(){
    this.masterService.updateDepartment(this.createDepartment).subscribe(
      
      (res:any)=>{
        debugger;
        if(res.result){
          console.log(res);
          alert("Department is updated successfully");
          this.loadDepartment();

        }else{
          alert(res.message);
        }

      }
    )
  }

  OnUpdate(department:any){
    debugger;
    console.log("deptIds===",department.id);
    this.createDepartment=department;
    console.log("deptIds===",department.id);
    
  }

}
