import { Component, OnInit, PipeTransform, Pipe } from "@angular/core";
import { Department, IDepartment } from "../department";
import { DepartmentService } from "../department.service";
import { Task } from "../task";
import { TaskService } from "../task.service";
import { Observable } from "rxjs";
import { allSettled } from "q";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html",
  styleUrls: [
    "../app.component.css",
    "../tasks/tasks.component.css",
    "./departments.component.css"
  ]
})
export class DepartmentsComponent implements OnInit {
  private searchName: string;
  private selectedDepartment: Department;
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

  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }

  save(): void {
    this.departmentService
      .updateDepartment(this.selectedDepartment)
      .subscribe();
  }

  addDepartment(name: string): void {
    name = name.trim();
    if (!name) return;
    this.departmentService
      .addDepartment({ name, building: "R1" } as Object)
      .subscribe(department => {
        this.apiDepartments.push(department);
      });
  }

  delete(): void {
    this.apiDepartments = this.apiDepartments.filter(
      t => t !== this.selectedDepartment
    );
    this.departmentService
      .deleteDepartment(this.selectedDepartment)
      .subscribe();
  }
}

@Pipe({ name: "employeeFromDepartmentPipe" })
export class EmployeeFromDepartmentPipe implements PipeTransform {
  transform(employees: Employee[], employee_ids: number[]): string {
    var names: string[] = [];
    employees.forEach(employee => {
      if (employee_ids.includes(employee.id))
        names.push(`${employee.first_name} ${employee.last_name}`);
    });
    return names.join(", ");
  }
}