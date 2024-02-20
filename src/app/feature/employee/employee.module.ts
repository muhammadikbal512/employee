import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { EmployeeDialogComponent } from './component/employee-dialog/employee-dialog.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDialogComponent,
    EmployeeDetailComponent
  ],
  imports: [
    SharedModule
  ],
})
export class EmployeeModule { }
