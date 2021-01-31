import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import {concatMap, catchError } from 'rxjs/operators';
import { Enrollee } from '../../models/enrollee';
import { EnrolleeService } from '../../services/enrollee.service';

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss']
})
export class EnrolleeComponent implements OnInit, OnDestroy {

  enrollee: Enrollee;

  routeSubscription: Subscription;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _enrolleeService: EnrolleeService,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
    this.routeSubscription = this._route.params.pipe(
      concatMap(res => this._enrolleeService.getEnrollee(res.id)),
      catchError(err => {
        this._toastr.error(`Enrollee failed to load`, '', {positionClass: 'toast-bottom-right'});
        this.routeBackToListing();
        throw err;
      })
    ).subscribe(res => this.enrollee = res);
    
  }

  onSubmit() {
    this._enrolleeService.updateEnrollee(this.enrollee).subscribe(() => {
      this.routeBackToListing();
      this._toastr.success(`${this.enrollee.name} updated successfully!`, '', {positionClass: 'toast-bottom-right'});
    });
  }


  goBack() {
    this.routeBackToListing();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }


  private routeBackToListing() {
    this._router.navigate(['/']);
  }

}
