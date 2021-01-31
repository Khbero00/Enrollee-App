import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EnrolleesModule } from '../enrollees.module';

import { EnrolleeService } from './enrollee.service';

describe('EnrolleeService', () => {

  let service: EnrolleeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EnrolleesModule,
        NoopAnimationsModule
      ],
    });
    service = TestBed.inject(EnrolleeService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
