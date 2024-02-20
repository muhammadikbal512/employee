import { Component, OnInit } from '@angular/core';
import { Employee } from './interface/employee';
import { EmployeeService } from './service/employee.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { EmployeeState } from './state/employee.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Select(EmployeeState.employees) employees$!: Observable<Employee[]>;
  constructor(
    private employeeService: EmployeeService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private store$: Store,
  ) {}

  employeeItems: Employee[] = [];
  selectedEmployeeItem: Employee | undefined;

  ngOnInit(): void {
    this.employees$.subscribe((data) => {
      this.employeeItems = data;
      if (this.store$.selectSnapshot(EmployeeState.employees).length == 0) {
        this.employeeService.onFetchEmployee();
      } 
    });
  }

  applyFilterGlobal(event: any) {
    const filteredData = this.employeeItems.filter((item: any) =>
      this.filterValue(item, event.target.value)
    );
    this.employeeService.onFetchEmployeeByQuery(filteredData);
  }

  onReset() {
    this.employeeService.onFetchEmployee();
  }

  filterValue(item: any, filterText: string) {
    return (
      item.username.toLowerCase().includes(filterText.toLowerCase()) ||
      item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lastName.toLowerCase().includes(filterText.toLowerCase()) || 
      item.email.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  onClickedAddEmployee() {
    this.router.navigate([`/home/employee/add`]);
  }

  onClickedEditEmployee() {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Confirmed',
          detail: 'You edited a data',
        });
      },
      reject: () => {},
    });
  }

  onClickedDeleteEmployee() {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Confirmed',
          detail: 'You deleted a data',
        });
      },
      reject: () => {},
    });
  }

  onDetailEmployee(event: string) {
    this.employeeService.fetchEmployeeById(event);
    this.router.navigate([`home/employee/detail`]);
  }
}
