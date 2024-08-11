import { Component, inject } from '@angular/core';
import { LoginRequest } from '../../model/login-request';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRequest: LoginRequest = {
    "emailId": "",
    "password": ""
  };
  private masterService = inject(MasterService);
  private route=inject(Router);
  login() {
    debugger;
    this.masterService.login(this.loginRequest).subscribe(
      
      (data: any) => {
        if (data.result) {
          debugger;
          localStorage.setItem("ticketUser", JSON.stringify(data.data));
          this.route.navigateByUrl("dashboard");

        }
        else {
          alert(data.error);
        }

      }
      ,
      error => {
        console.log(error);
      }
    )
  }

}
