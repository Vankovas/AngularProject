import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../task";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: [
    "../app.component.css",
    "../tasks/tasks.component.css",
    "./task-detail.component.css"
  ]
})
export class TaskDetailComponent implements OnInit {
  //Task Input Property
  @Input()
  task: Task;

  constructor() {}
  ngOnInit() {}
}
