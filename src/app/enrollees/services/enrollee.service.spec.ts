import { inject, TestBed } from '@angular/core/testing';
import { EnrolleeService } from './enrollee.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';

import * as mockData from '../mock-data/mock-data';

describe('EnrolleeService', () => {

  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnrolleeService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  /*
  * Enrollee Service Tests
  */
  it('should be created', inject([EnrolleeService], (service: EnrolleeService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all enrollees', inject([EnrolleeService], (service: EnrolleeService) => {
    const enrollees = new mockData.EnrolleesMock().getEnrollees();

    service.getEnrollees().subscribe(res => {
      expect(res.length).toBe(enrollees.length);
      expect(res).toEqual(enrollees);
    });

    const req = httpTestingController.expectOne(
      `${environment.HOST_URL}/enrollees`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(enrollees);
  }));

  it('should get a enrollee', inject([EnrolleeService], (service: EnrolleeService) => {
    const enrollee = new mockData.EnrolleesMock().getEnrollees()[0];

    service.getEnrollee(enrollee.id).subscribe(res => {
      expect(res).toEqual(enrollee);
    });

    const req = httpTestingController.expectOne(
      `${environment.HOST_URL}/enrollees/${enrollee.id}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(enrollee);
  }));
  it('should update a enrollee', inject([EnrolleeService], (service: EnrolleeService) => {
    const enrollee = new mockData.EnrolleesMock().getEnrollees()[0];
    enrollee.name = "Robin";

    service.updateEnrollee(enrollee).subscribe(res => {
      expect(res.name).toEqual(enrollee.name);
    });

    const req = httpTestingController.expectOne(
      `${environment.HOST_URL}/enrollees/${enrollee.id}`
    );
    expect(req.request.method).toEqual('PUT');
    req.flush(enrollee);
  }));
});
