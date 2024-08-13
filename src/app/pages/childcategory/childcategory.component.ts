import { Component, inject, OnInit } from '@angular/core';
import { AllChildCategoryModel } from '../../model/all-child-category-model';
import { MasterService } from '../../service/master.service';
import { CreateChildCategoryModel } from '../../model/create-child-category-model';
import { FormsModule } from '@angular/forms';
import { GetAllParentCategory } from '../../model/get-all-parent-category';

@Component({
  selector: 'app-childcategory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './childcategory.component.html',
  styleUrl: './childcategory.component.css'
})
export class ChildcategoryComponent implements OnInit {

  ngOnInit(): void {
    this.loadChildCategory();

    this.loadParentCategory();
  }
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
  createChildCategoryModel:CreateChildCategoryModel={
    childCategoryId: 0,
        categoryName: "",
        parentCategoryId: 0

  };

  deptId:string='';

  
 private masterService=inject(MasterService);
 allParentCategory:GetAllParentCategory={
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

 loadParentCategory()
 {
   this.masterService.getParentCategory().subscribe(
     (res:any)=>{
       if(res.result){
         this.allParentCategory=res;

       }
       else{
        console.log(res.message);
       }
     }
   )
 }
  loadChildCategory()
  {
    this.masterService.getAllChildCategory().subscribe(
      (res:any)=>{
        debugger;
        if(res.result){
          this.allChildCategoryModel=res;

        }
        else{
          alert(res.message);
        }
      }
    )
  }
  onCreateChildCategory(){
    debugger;
  
      this.masterService.createChildCategory(this.createChildCategoryModel).subscribe(
        (res:any)=>{
          if(res.result){
            console.log(res);
            alert("Child Category is created successfully");
            this.loadChildCategory();
  
          }else{
            alert(res.message);
          }
  
        }
      
      )

   
 
  }

  onDeleteChildCategory(ChildCategoryId:number){
    debugger;
    console.log("ChildCategoryId===",ChildCategoryId)
if(confirm("are you sure you want to delete?")){
  this.masterService.deleteChildCategory(ChildCategoryId).subscribe(
    (res:any)=>{
      if(res.result){
        console.log(res);
        alert("Child Category is deleted successfully");
        this.loadChildCategory();

      }else{
        alert(res.message);
      }

    }
  )
}
  }
  UpdateChildCategory(){
    this.masterService.updateChildCategory(this.createChildCategoryModel).subscribe(
      
      (res:any)=>{
        debugger;
        if(res.result){
          console.log(res);
          alert("Child Category is updated successfully");
          this.loadChildCategory();

        }else{
          alert(res.message);
        }

      }
    )
  }

  OnUpdate(ChildCategorysFromComponent:any){
    
    // console.log("parentCategoryId===",parentCategorys.categoryId);
    this.createChildCategoryModel=ChildCategorysFromComponent;
    // console.log("deptIds===",parentCategorys.categoryId);
    debugger;
    
  }
}
