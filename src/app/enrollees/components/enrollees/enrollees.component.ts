import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

import { Enrollee } from '../../models/enrollee';

import { EnrolleeService } from '../../services/enrollee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.scss']
})
export class EnrolleesComponent implements OnInit {
  displayedColumns: string[] = ['actions', 'id', 'name', 'dob', 'status'];
  expandedElement: Enrollee | null;
  
  dataSource: MatTableDataSource<Enrollee> = new MatTableDataSource<Enrollee>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _enrolleeService: EnrolleeService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this._enrolleeService.getEnrollees().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this._toastr.success("Data loaded successfully!", '', {positionClass: 'toast-bottom-right'});
    });
  }

  applyFilter(filterValue: string) {
    const filter = filterValue;
    this.dataSource.filter = filter.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onEditEnrollee(enrollee: Enrollee) {
    this._router.navigate([`${enrollee.id}`]);
  }

}
