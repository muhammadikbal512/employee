import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}
  onLogout() {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Logout',
        });
        this.router.navigate(['']);
      },
      reject: () => {},
    });
  }
}
