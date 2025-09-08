import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/toDo/toDo.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyStatsComponent } from './components/my-stats/my-stats.component';
import { AuthInterceptor } from './auth/auth-services/Auth-Interceptor';
import { AuthModule } from './auth/auth.module';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendRequestsComponent } from './components/friend-requests/friend-requests.component';

@NgModule({
  declarations: [
    AppComponent,
      ToDoComponent,
      NavbarComponent,
MyStatsComponent,
      ProfileComponent,
      FriendRequestsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AuthModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
