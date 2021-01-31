import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnrolleesModule } from '../../enrollees.module';
import { EnrolleeService } from '../../services/enrollee.service';

import { EnrolleeComponent } from './enrollee.component';

describe('EnrolleeComponent', () => {
  let component: EnrolleeComponent;
  let fixture: ComponentFixture<EnrolleeComponent>;

  let enrollesService: any;
  let toastrService: any;
  let routerService: any;
  let activatedRouteService: any;

  const enrollesServiceSpy = jasmine.createSpyObj('EnrolleeService', ['getEnrollee', 'updateEnrollee']);
  const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);
  const routerServiceSpy = jasmine.createSpyObj('Router', ['navigate']);
  const activatedServiceSpy = jasmine.createSpyObj('ActivatedRoute', ['params.pipe']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EnrolleesModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: EnrolleeService, useValue: enrollesServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy },
        { provide: Router, useValue: routerServiceSpy },
        { provide: ActivatedRoute, useValue: activatedServiceSpy }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(EnrolleeComponent);
      component = fixture.componentInstance;

      enrollesService = TestBed.get(EnrolleeService);
      toastrService = TestBed.get(ToastrService);
      routerService = TestBed.get(Router);
      activatedRouteService = TestBed.get(ActivatedRoute);
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
