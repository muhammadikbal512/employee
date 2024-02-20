import { Employee } from '../interface/employee';

export class EmployeeGet {
  static readonly type = '[Employee] Get';
}

export class EmployeebyQuery {
  static readonly type = '[Employee] Get Query';
  constructor(public data: Employee[]) {}
}
