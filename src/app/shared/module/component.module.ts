import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MatBadgeModule } from '@angular/material/badge';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'primeng/blockui';
import { PasswordModule } from 'primeng/password';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MatMenuModule } from '@angular/material/menu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsModule } from '@ngxs/store';
import { EmployeeState } from 'src/app/feature/employee/state/employee.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

const componentModule = [
  CommonModule,
  ButtonModule,
  SidebarModule,
  MatSidenavModule,
  HttpClientModule,
  MatListModule,
  MatIconModule,
  RouterModule,
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  BreadcrumbModule,
  MatBadgeModule,
  TableModule,
  CardModule,
  InputTextModule,
  CalendarModule,
  TabViewModule,
  RippleModule,
  DropdownModule,
  InputTextareaModule,
  PaginatorModule,
  ProgressSpinnerModule,
  ToastModule,
  ReactiveFormsModule,
  PasswordModule,
  ConfirmPopupModule,
  ConfirmDialogModule,
  MatMenuModule,
  MatTooltipModule,
  OverlayPanelModule,
  MatIconModule,

  NgxsDispatchPluginModule.forRoot(),
  NgxsModule.forRoot([EmployeeState]),
  NgxsLoggerPluginModule.forRoot()
];

@NgModule({
  declarations: [],
  imports: [componentModule],
  exports: [componentModule],
})
export class ComponentModule {}
