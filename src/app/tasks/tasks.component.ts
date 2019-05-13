import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TaskService } from "../task.service";
import { Observable } from "rxjs";
import { Department } from "../department";
import { Employee, IEmployee } from "../employee";
import { DepartmentService } from "../department.service";
import { EmployeeService } from "../employee.service";
import { Pipe, PipeTransform } from "@angular/core";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css", "../app.component.css"]
})
export class TasksComponent implements OnInit {
  private searchName: string;
  private selectedTask: Task;
  private apiTasks: Task[];
  private apiDepartments: Department[];
  private apiEmployees: Employee[];

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
  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  save(): void {
    this.taskService.updateTask(this.selectedTask).subscribe();
  }

  addTask(name: string): void {
    name = name.trim();
    if (!name) return;
    this.taskService
      .addTask({ name, department_id: 7203 } as Object)
      .subscribe(task => {
        this.apiTasks.push(task);
      });
  }

  delete(): void {
    this.apiTasks = this.apiTasks.filter(t => t !== this.selectedTask);
    this.taskService.deleteTask(this.selectedTask).subscribe();
  }
}

@Pipe({ name: "employeeFromTaskPipe" })
export class EmployeeFromTaskPipe implements PipeTransform {
  transform(employees: Employee[], employee_ids: number[]): string {
    var names: string[] = [];
    employees.forEach(employee => {
      if (employee_ids.includes(employee.id))
        names.push(`${employee.first_name} ${employee.last_name}`);
    });
    return names.join(", ");
  }
}
