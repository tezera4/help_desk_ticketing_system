import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ParentcategoryComponent } from './pages/parentcategory/parentcategory.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"

    },
    {
        path:"login",
        component:LoginComponent

    },
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"department",
                component:DepartmentComponent,


            },
            {
                path:"parent-category",
                component:ParentcategoryComponent,


            },
            
            {
                path:"dashboard",
                component:DashboardComponent
            }
        ]
    }
];
