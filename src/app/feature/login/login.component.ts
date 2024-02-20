import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private messageService: MessageService) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(event: any) {
    if (this.form.valid) {
      const username = this.getUsernameField()?.getRawValue();
      const password = this.getPasswordField()?.getRawValue();
      if (username === 'admin' && password === 'password') {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Success Login',
        });
        this.router.navigate(['home/employee'])
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid credentials. Please try again.',
        });
      }
    }
  }

  getUsernameField() {
    return this.form.get('username');
  }

  getPasswordField() {
    return this.form.get('password');
  }
}
