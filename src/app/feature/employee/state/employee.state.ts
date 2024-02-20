import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Employee } from '../interface/employee';
import { Injectable } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { EmployeeGet, EmployeebyQuery } from './employee.action';
import { tap } from 'rxjs';

export class EmployeeStateModel {
  employees: Employee[] = [];
  employee: Employee | undefined;
}

@State<EmployeeStateModel>({
  name: 'employee',
  defaults: {
    employees: [],
    employee: undefined,
  },
})
@Injectable()
export class EmployeeState {
  @Selector()
  static employees(state: EmployeeStateModel) {
    return state.employees;
  }

  @Selector()
  static employee(state: EmployeeStateModel) {
    return state.employee;
  }

  constructor(private employeeService: EmployeeService) {}

  @Action(EmployeeGet, { cancelUncompleted: true }) getData(
    ctx: StateContext<EmployeeStateModel>
  ) {
    return this.employeeService.fetchEmployee().pipe(
      tap((response) => {
        ctx.setState({
          ...ctx.getState(),
          employees: response,
        });
      })
    );
  }

  @Action(EmployeebyQuery, { cancelUncompleted: true }) getDataByQuery(
    ctx: StateContext<EmployeeStateModel>,
    { data }: EmployeebyQuery
  ) {
    ctx.setState({
      ...ctx.getState(),
      employees: data,
    });
  }
}
