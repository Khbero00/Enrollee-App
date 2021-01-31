import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Enrollee } from '../models/enrollee';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  constructor(private _http: HttpClient) { }

  getEnrollees(): Observable<Enrollee[]> {
    return this._http.get<Enrollee[]>(`${environment.HOST_URL}/enrollees`);
  }

  getEnrollee(id: string): Observable<Enrollee> {
    return this._http.get<Enrollee>(`${environment.HOST_URL}/enrollees/${id}`);
  }

  updateEnrollee(enrollee: Enrollee): Observable<Enrollee> {
    return this._http.put<Enrollee>(`${environment.HOST_URL}/enrollees/${enrollee.id}`, enrollee);
  }
}
