import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../employee";
import { Department } from "../department";
import { EmployeeService } from "../employee.service";
import { Task } from "../task";
import { DepartmentService } from "../department.service";
import { TaskService } from "../task.service";
@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: [
    "../app.component.css",
    "../tasks/tasks.component.css",
    "./employees.component.css"
  ]
})
export class EmployeesComponent implements OnInit {
  searchName: string;
  selectedEmployee: Employee;
  newEmployee: Employee = new Employee();
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

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  save(): void {
    this.employeeService.updateEmployee(this.selectedEmployee).subscribe();
  }

  addEmployee(first_name: string, last_name: string): void {
    first_name = first_name.trim();
    last_name = last_name.trim();
    if (!first_name || !last_name) return;
    this.employeeService
      .addEmployee({
        first_name,
        last_name,
        birth_date: null,
        department_id: 7200
      } as Object)
      .subscribe(employee => {
        this.apiEmployees.push(employee);
      });
  }

  delete(): void {
    this.apiEmployees = this.apiEmployees.filter(
      t => t !== this.selectedEmployee
    );
    this.employeeService.deleteEmployee(this.selectedEmployee).subscribe();
  }
}

@Pipe({ name: "departmentFromEmployeePipe" })
export class DepartmentFromEmployeePipe implements PipeTransform {
  transform(departments: Department[], department_id: number): string {
    var names: string = "";
    departments.forEach(department => {
      console.log(departments);
      if (department_id == department.id) names = `${department.name}`;
    });
    return names;
  }
}
