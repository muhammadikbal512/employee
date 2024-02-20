import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css'],
})
export class EmployeeDialogComponent implements OnInit {
  form!: FormGroup;
  maxSelectableDate!: Date;

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

  status = [
    { code: 1, name: 'blue' },
    { code: 2, name: 'brown' },
    { code: 3, name: 'green' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.maxSelectableDate = new Date();
    this.form = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      status: ['', Validators.required],
      basicSalary: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
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
          detail: 'You added a data',
        });
        this.router.navigate(['home/employee']);
      },
      reject: () => {},
    });
  }
}
