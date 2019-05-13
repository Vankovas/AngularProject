import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { TasksComponent, EmployeeFromTaskPipe } from "./tasks/tasks.component";
import {
  EmployeesComponent,
  DepartmentFromEmployeePipe
} from "./employees/employees.component";
import {
  DepartmentsComponent,
  EmployeeFromDepartmentPipe
} from "./departments/departments.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { AppRoutingModule } from ".//app-routing.module";
import { EmployeeService } from "./employee.service";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { HttpClientModule } from "@angular/common/http";
import { DepartmentService } from "./department.service";
import { TaskService } from "./task.service";
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EmployeesComponent,
    DepartmentsComponent,
    TaskDetailComponent,
    DashboardComponent,
    EmployeeFromTaskPipe,
    EmployeeFromDepartmentPipe,
    DepartmentFromEmployeePipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [TaskService, EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
