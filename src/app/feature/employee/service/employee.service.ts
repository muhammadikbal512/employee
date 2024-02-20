import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee';
import { Observable } from 'rxjs';
import { EmployeeDispatcher } from '../state/employee.dispatcher';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employeeId: string = '';

  constructor(
    private http: HttpClient,
    private employeeDispatcher: EmployeeDispatcher
  ) {}

  fetchEmployee() {
    return this.http.get<Employee[]>('assets/employee.json');
  }

  fetchEmployeeById(id: string) {
    this.employeeId = id;
  }

  onFetchEmployee() {
    this.employeeDispatcher._FetchAllEmployeeDispatch();
  }

  onFetchEmployeeByQuery(data: Employee[]) {
    this.employeeDispatcher._FetchEmployeeByQuery(data);
  }

  getEmployee() {
    return this.employeeId;
  }
}
