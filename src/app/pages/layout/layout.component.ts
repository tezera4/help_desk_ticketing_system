import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from "../../navigation/navigation.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavigationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  private route=inject(Router);
  logout(){
    localStorage.removeItem("ticketUser");
    this.route.navigateByUrl("login");

  }

}
