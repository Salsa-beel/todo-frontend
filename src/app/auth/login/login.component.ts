import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Handles the login form submission.
   */
  onLogin(): void {
    // Basic validation
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe(
        response => {
          console.log('Login successful!', response);
          // On successful login, navigate to the to-do list
          this.router.navigate(['/todos']);
        },
        error => {
          console.error('Login failed:', error);
          alert('Login failed. Please check your credentials.');
        }
      );
    }
  }

}
