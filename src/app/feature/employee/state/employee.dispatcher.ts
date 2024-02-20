import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  EmployeeGet,
  EmployeebyQuery,
} from './employee.action';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDispatcher {
  @Dispatch()
  public _FetchAllEmployeeDispatch() {
    return new EmployeeGet();
  }

  @Dispatch()
  public _FetchEmployeeByQuery(data: Employee[]) {
    return new EmployeebyQuery(data);
  }
}
