import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  {path: 'booking', component: BookingComponent},
  
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
