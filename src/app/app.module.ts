import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './profile/student/student.component';
import { LecturerComponent } from './profile/lecturer/lecturer.component';
import { BookingComponent } from './booking/booking.component';

import { StudentRecordComponent } from './profile/student/student-record/student-record.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ProfileComponent,
    StudentComponent,
    LecturerComponent,
    BookingComponent,
    StudentRecordComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
