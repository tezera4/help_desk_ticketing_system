import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { GetAllDepartment } from '../../model/getAllDepartment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe],
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

}
