import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './shared/component/default/default.component';
import { EmployeeComponent } from './feature/employee/employee.component';
import { LoginComponent } from './feature/login/login.component';
import { EmployeeDetailComponent } from './feature/employee/component/employee-detail/employee-detail.component';
import { EmployeeDialogComponent } from './feature/employee/component/employee-dialog/employee-dialog.component';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'employee/add',
        component: EmployeeDialogComponent,
      },
      {
        path: 'employee/detail',
        component: EmployeeDetailComponent,
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
