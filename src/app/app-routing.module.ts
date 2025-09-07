import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/Auth-Guard.service';
import { ToDoComponent } from './components/toDo/toDo.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendRequestsComponent } from './components/friend-requests/friend-requests.component';

const routes: Routes = [
  // Default route that redirects to the login page
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Route for the login component
  { path: 'login', component: LoginComponent },
  // Route for the register component
  { path: 'register', component: RegisterComponent },
  // Protected route for the to-do list component
  { path: 'todos', component: ToDoComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // { path: 'friends', component: FriendRequestsComponent, canActivate: [AuthGuard] },
  // Wildcard route for any other URL, redirects to login
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
