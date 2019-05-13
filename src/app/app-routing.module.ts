import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { EmployeesComponent } from "./employees/employees.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "tasks", component: TasksComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
