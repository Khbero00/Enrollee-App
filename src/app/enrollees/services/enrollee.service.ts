import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollee } from '../models/enrollee';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  constructor(private _http: HttpClient) { }

  getEnrollees(): Observable<Enrollee[]> {
    return this._http.get<Enrollee[]>(`http://127.0.0.1:8080/enrollees`);
  }

  getEnrollee(id: string): Observable<Enrollee> {
    return this._http.get<Enrollee>(`http://127.0.0.1:8080/enrollees/${id}`);
  }

  updateEnrollee(enrollee: Enrollee): Observable<Enrollee> {
    return this._http.put<Enrollee>(`http://127.0.0.1:8080/enrollees/${enrollee.id}`, enrollee);
  }
}
