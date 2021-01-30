import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleesComponent } from './components/enrollees/enrollees.component';
import { EnrolleeComponent } from './components/enrollee/enrollee.component';



@NgModule({
  declarations: [EnrolleesComponent, EnrolleeComponent],
  imports: [
    CommonModule
  ]
})
export class EnrolleesModule { }
