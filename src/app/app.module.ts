
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { FormViewComponent } from './provider/form-view/form-view.component';
import { TableViewComponent } from './provider/table/table-view/table-view.component';
import { TablePaginationComponent } from './provider/table/table-pagination/table-pagination.component';
import { AppRoutingModule } from './app.routing.module';
import { UsersComponent } from './components/users/users.component';
import { CaptureUsersComponent } from './components/users/capture-users/capture-users.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { DepartmentComponent } from './components/department/department.component';
import { FacaultyComponent } from './components/facaulty/facaulty.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { SlasHomeComponent } from './components/slas-home/slas-home.component';
import { TimeSlotsComponent } from './components/time-slots/time-slots.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestComponent } from './provider/http-request/http-request.component';
import { CaptureFacaultyComponent } from './components/facaulty/capture-facaulty/capture-facaulty.component';
import { CaptureDepartmentComponent } from './components/department/capture-department/capture-department.component';
import { CaptureProgramsComponent } from './components/programs/capture-programs/capture-programs.component';
import { CaptureAppointmentComponent } from './components/appointments/capture-appointment/capture-appointment.component';
import { CaptureTimeSlotsComponent } from './components/time-slots/capture-time-slots/capture-time-slots.component';


@NgModule({
  declarations: [
    AppComponent,
    FormViewComponent,
    TableViewComponent,
    TablePaginationComponent,
    UsersComponent,
    CaptureUsersComponent,
    LoginComponent,
    HomeComponent,
    AppointmentsComponent,
    DepartmentComponent,
    FacaultyComponent,
    ProgramsComponent,
    SlasHomeComponent,
    TimeSlotsComponent,
    HttpRequestComponent,
    CaptureFacaultyComponent,
    CaptureDepartmentComponent,
    CaptureProgramsComponent,
    CaptureAppointmentComponent,
    CaptureTimeSlotsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpRequestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
