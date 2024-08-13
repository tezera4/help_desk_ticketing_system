import { Component, inject, OnInit } from '@angular/core';
import { AllEmployeesModel } from '../../model/all-employees-model';
import { CreateEmployeeModel } from '../../model/create-employee-model';
import { MasterService } from '../../service/master.service';
import { GetAllDepartment } from '../../model/getAllDepartment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  ngOnInit(): void {
    this.loadEmployees();

    this.loadDepartment();
  }
  isNewView:boolean=true;
  role:any[]=['Employee','admin'];
  allEmployeesModel: AllEmployeesModel = {
    message: '',
    result: false,
    data: [
      {
        employeeId: 0,
        employeeName: '',
        deptId: 0,
        deptName: '',
        contactNo: '',
        emailId: '',
        role: '',
      },
    ],
  };
  createEmployeeModel: CreateEmployeeModel = {
    employeeId: 0,
    employeeName: '',
    contactNo: '',
    emailId: '',
    deptId: 0,
    password: '',
    gender: '',
    role: '',
  };

  empId: string = '';

  private masterService = inject(MasterService);
  allDept: GetAllDepartment = {
    message: '',
    result: false,
    data: [
      {
        deptId: 0,
        deptName: '',
        deptHeadName: '',
        deptHeadEmpId: 0,
        createdDate: new Date(),
      },
    ],
  };

  loadEmployees() {
    this.masterService.getAllEmployees().subscribe((res: any) => {
      // debugger;
      if (res.result) {
        this.allEmployeesModel = res;
      } else {
        alert(res.message);
      }
    });
  }
  loadDepartment() {
    this.masterService.getDepartment().subscribe((res: any) => {
      if (res.result) {
        this.allDept = res;
      } else {
        alert(res.message);
      }
    });
  }
  onCreateEmployee() {
    // debugger;
    this.masterService
      .createEmployee(this.createEmployeeModel)
      .subscribe((res: any) => {
        if (res.result) {
          console.log(res);
          alert('Employee is created successfully');
          this.loadEmployees();
        } else {
          alert(res.message);
        }
      });
  }

  onDeleteEmployee(employeeId: number) {
    // debugger;
    console.log('employeeId===', employeeId);
    if (confirm('are you sure you want to delete?')) {
      this.masterService.deleteEmployee(employeeId).subscribe((res: any) => {
        if (res.result) {
          console.log(res);
          alert(' employee is deleted successfully');
          this.loadEmployees();
        } else {
          alert(res.message);
        }
      });
    }
  }
  UpdateEmployee() {
    this.masterService
      .updateEmployee(this.createEmployeeModel)
      .subscribe((res: any) => {
        // debugger;
        if (res.result) {
          console.log(res);
          alert('Employee is updated successfully');
          this.loadEmployees();
        } else {
          alert(res.message);
        }
      });
  }

  OnUpdate(employeeFromComponent: any) {
    // console.log("parentCategoryId===",parentCategorys.categoryId);
    this.createEmployeeModel = employeeFromComponent;
    // console.log("deptIds===",parentCategorys.categoryId);
    // debugger;
  }
}
