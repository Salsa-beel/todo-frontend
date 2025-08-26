import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService:AuthService ,private router: Router) { }

  ngOnInit() {
  }


  logOut(): void {
    console.log('Attempting to log out...');
    // The subscribe() method is necessary to initiate the HTTP request.
    this.authService.logout().subscribe({
      next: () => {
        console.log('Logout successful! Redirecting to login page...');
        // On successful logout, navigate the user to the login route.
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout failed:', err);
        // Even if the server request fails, we still want to redirect the user
        // and handle the UI state.
        this.router.navigate(['/login']);
      }
    });
  }
}
