import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:any;
  password:any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }


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
