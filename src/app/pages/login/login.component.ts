import { Component, inject } from '@angular/core';
import { LoginRequest } from '../../model/login-request';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';
import { TicketService } from '../../service/ticket.service';

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
  private tickeService=inject(TicketService);
  private route=inject(Router);
  login() {
    debugger;
    this.masterService.login(this.loginRequest).subscribe(
      
      (res: any) => {
        if (res.result) {
          debugger;
          localStorage.setItem("ticketUser", JSON.stringify(res.data));
          this.tickeService.loginUserId=res.data.employeeId;
          this.route.navigateByUrl("dashboard");

        }
        else {
          alert(res.error);
        }

      }
      ,
      error => {
        console.log(error);
      }
    )
  }

}
