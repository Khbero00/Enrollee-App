import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrolleeComponent } from './enrollees/components/enrollee/enrollee.component';
import { EnrolleesComponent } from './enrollees/components/enrollees/enrollees.component';

const routes: Routes = [
  {path: '', component: EnrolleesComponent },
  {path: ':id', component: EnrolleeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
