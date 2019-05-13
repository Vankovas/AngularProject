import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { TaskService } from "../task.service";
import { DepartmentService } from "../department.service";
import { Task } from "../task";
import { Department } from "../department";
import { Employee } from "../employee";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: [
    "../app.component.css",
    "../tasks/tasks.component.css",
    "../departments/departments.component.css",
    "../employees/employees.component.css",
    "./dashboard.component.css"
  ]
})
export class DashboardComponent implements OnInit {
  taskSearchName: string;
  departmentSearchName: string;
  employeeSearchName: string;
  selectedTask: Task;
  selectedDepartment: Department;
  selectedEmployee: Employee;
  private apiDepartments: Department[];
  private apiEmployees: Employee[];
  private apiTasks: Task[];

  constructor(
    private departmentService?: DepartmentService,
    private taskService?: TaskService,
    private employeeService?: EmployeeService
  ) {}

  ngOnInit() {
    this.departmentService
      .getAPIDepartments()
      .subscribe(data => (this.apiDepartments = data));
    this.taskService.getAPITasks().subscribe(data => (this.apiTasks = data));
    this.employeeService
      .getAPIEmployees()
      .subscribe(data => (this.apiEmployees = data));
  }
}
