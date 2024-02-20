import { Component, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../interface/employee';
import { Select } from '@ngxs/store';
import { EmployeeState } from '../../state/employee.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent {
  @Select(EmployeeState.employees) employees$!: Observable<Employee[]>;

  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private employeeService: EmployeeService
  ) {}

  group = [
    { code: 1, name: 'A' },
    { code: 2, name: 'B' },
    { code: 3, name: 'C' },
    { code: 4, name: 'D' },
    { code: 5, name: 'E' },
    { code: 6, name: 'F' },
    { code: 7, name: 'G' },
    { code: 8, name: 'H' },
    { code: 9, name: 'I' },
    { code: 10, name: 'J' },
  ];

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });

    const id = this.employeeService.getEmployee();
    this.employees$.subscribe((data) => {
      if (data !== undefined) {
        let currentEmployee = data.find((v1: any) => v1.id === id);
        this.getUsernameField()?.setValue(currentEmployee?.username);
        this.getFirstnameField()?.setValue(currentEmployee?.firstName);
        this.getLastnameField()?.setValue(currentEmployee?.lastName);
        this.getEmailField()?.setValue(currentEmployee?.email);
        this.getBirthDate()?.setValue(currentEmployee?.birthDate);
        this.getBasicSalaryField()?.setValue(currentEmployee?.basicSalary);
        this.getStatusField()?.setValue(currentEmployee?.status);
        this.getGroupField()?.setValue(
          this.group.find((v1) => v1.name === currentEmployee?.group)
        );
        this.getDescriptionField()?.setValue(currentEmployee?.description);
      }
    });
  }

  onCancel() {
    this.router.navigate(['home/employee']);
  }

  onSave() {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'You updated a data',
        });
        this.router.navigate(['home/employee']);
      },
      reject: () => {},
    });
  }

  getUsernameField() {
    return this.form.get('username');
  }

  getFirstnameField() {
    return this.form.get('firstName');
  }

  getLastnameField() {
    return this.form.get('lastName');
  }

  getEmailField() {
    return this.form.get('email');
  }

  getBirthDate() {
    return this.form.get('birthDate');
  }

  getBasicSalaryField() {
    return this.form.get('basicSalary');
  }

  getStatusField() {
    return this.form.get('status');
  }

  getGroupField() {
    return this.form.get('group');
  }

  getDescriptionField() {
    return this.form.get('description');
  }
}
