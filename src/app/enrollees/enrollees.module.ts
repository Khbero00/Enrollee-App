import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleesComponent } from './components/enrollees/enrollees.component';
import { EnrolleeComponent } from './components/enrollee/enrollee.component';
import { MaterialModule } from '../material/material.module';
import { HeaderModule } from '../header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EnrolleesComponent, EnrolleeComponent],
  exports: [EnrolleesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderModule
  ]
})
export class EnrolleesModule { }
