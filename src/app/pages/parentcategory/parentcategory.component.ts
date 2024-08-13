import { Component, inject, OnInit } from '@angular/core';
import { GetAllParentCategory } from '../../model/get-all-parent-category';
import { MasterService } from '../../service/master.service';
import { CreateCategory } from '../../model/create-category';
import { FormsModule } from '@angular/forms';
import { GetAllDepartment } from '../../model/getAllDepartment';

@Component({
  selector: 'app-parentcategory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parentcategory.component.html',
  styleUrl: './parentcategory.component.css'
})
export class ParentcategoryComponent implements OnInit {

  ngOnInit(): void {
    this.loadParentCategory();
    this.loadDepartment();
  }
  getAllParentCategory:GetAllParentCategory={
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
  createCategory:CreateCategory={
    categoryId:0,
    categoryName:"",
    deptId:0

  };

  deptId:string='';

  
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
  loadParentCategory()
  {
    this.masterService.getParentCategory().subscribe(
      (res:any)=>{
        debugger;
        if(res.result){
          this.getAllParentCategory=res;

        }
        else{
          alert(res.message);
        }
      }
    )
  }
  onCreateParentCategory(){
    debugger;
  
      this.masterService.createParentCategory(this.createCategory).subscribe(
        (res:any)=>{
          if(res.result){
            console.log(res);
            alert("Parent Category is created successfully");
            this.loadParentCategory();
  
          }else{
            alert(res.message);
          }
  
        }
      
      )

   
 
  }

  onDeleteParentCategory(categoryId:number){
    debugger;
    console.log("categoryId===",categoryId)
if(confirm("are you sure you want to delete?")){
  this.masterService.deleteParentCategory(categoryId).subscribe(
    (res:any)=>{
      if(res.result){
        console.log(res);
        alert("Parent Category is deleted successfully");
        this.loadParentCategory();

      }else{
        alert(res.message);
      }

    }
  )
}
  }
  UpdateParentCategory(){
    this.masterService.updateParentCategory(this.getAllParentCategory).subscribe(
      
      (res:any)=>{
        debugger;
        if(res.result){
          console.log(res);
          alert("Parent Category is updated successfully");
          this.loadParentCategory();

        }else{
          alert(res.message);
        }

      }
    )
  }

  OnUpdate(parentCategorys:any){
    
    // console.log("parentCategoryId===",parentCategorys.categoryId);
    this.createCategory=parentCategorys;
    // console.log("deptIds===",parentCategorys.categoryId);
    debugger;
    
  }


}
