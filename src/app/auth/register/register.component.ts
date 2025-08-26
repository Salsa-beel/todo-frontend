import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:any;
  email:any
  password:any;

  constructor(  private authService: AuthService, private router: Router,) { }

  ngOnInit() {
  }

  onRegister(){

    this.authService.register(this.username , this.email , this.password).subscribe(
      response => {
          console.log('Login successful!', response);
          // On successful login, navigate to the to-do list
          this.router.navigate(['/login']);
        },
         error => {
          console.error('Login failed:', error);
          alert('Login failed. Please check your credentials.');
        }

         );
    }
  }


