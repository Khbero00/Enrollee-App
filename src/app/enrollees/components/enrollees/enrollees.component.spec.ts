import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnrolleesModule } from '../../enrollees.module';
import { EnrolleeService } from '../../services/enrollee.service';

import * as mockData from '../../mock-data/mock-data';

import { EnrolleesComponent } from './enrollees.component';
import { of } from 'rxjs';

describe('EnrolleesComponent', () => {
  let component: EnrolleesComponent;
  let fixture: ComponentFixture<EnrolleesComponent>;

  let enrollesService: any;
  let toastrService: any;
  let routerService: any;

  const enrollesServiceSpy = jasmine.createSpyObj('EnrolleeService', ['getEnrollees']);
  const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);
  const routerServiceSpy = jasmine.createSpyObj('Router', ['navigate']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EnrolleesModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: EnrolleeService, useValue: enrollesServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy },
        { provide: Router, useValue: routerServiceSpy }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(EnrolleesComponent);
      component = fixture.componentInstance;

      enrollesService = TestBed.get(EnrolleeService);
      toastrService = TestBed.get(ToastrService);
      routerService = TestBed.get(Router);
    });
  });

  describe('when loading the Enrollees list page', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should get all enrollees', fakeAsync(() => {
      const enrolleesMock = new mockData.EnrolleesMock();
      const enrollees = enrolleesMock.getEnrollees();

      enrollesService.getEnrollees.and.returnValue(of(enrollees));

      fixture.detectChanges();

      flush();

      expect(component.dataSource.data).toBe(enrollees, 'Component Data Source different from mock data');
      expect(component.displayedColumns).toEqual(['actions', 'id', 'name', 'dob', 'status'], 'Displayed Columns in test dont equal columns in component');
      expect(toastrServiceSpy.success).toHaveBeenCalled();
    }));
  });

  describe('when the user filters data', () => {
    it('should filter by name', fakeAsync(() => {
      const enrolleesMock = new mockData.EnrolleesMock();
      const enrollees = enrolleesMock.getEnrollees();

      enrollesService.getEnrollees.and.returnValue(of(enrollees));

      fixture.detectChanges();

      flush();

      component.applyFilter('Ba');
      
      expect(component.dataSource.filter).toBe('ba');
      expect(component.dataSource.filteredData.length).toBe(1);
      expect(component.dataSource.filteredData[0].name).toBe('Batman');
      
    }));

    it('should filter by id', fakeAsync(() => {
      const enrolleesMock = new mockData.EnrolleesMock();
      const enrollees = enrolleesMock.getEnrollees();

      enrollesService.getEnrollees.and.returnValue(of(enrollees));

      fixture.detectChanges();

      flush();

      component.applyFilter('jj78');
      
      expect(component.dataSource.filter).toBe('jj78');
      expect(component.dataSource.filteredData.length).toBe(1);
      expect(component.dataSource.filteredData[0].name).toBe('Wonder Woman');
      
    }));
  });

  describe('when the user edits a enrollee', () => {
    it('should filter by name', fakeAsync(() => {
      const enrolleesMock = new mockData.EnrolleesMock();
      const enrollees = enrolleesMock.getEnrollees();

      enrollesService.getEnrollees.and.returnValue(of(enrollees));

      fixture.detectChanges();

      flush();

      component.onEditEnrollee(enrollees[0]);

      expect(routerServiceSpy.navigate).toHaveBeenCalledWith(['384']);
      
    }));
  });

});
