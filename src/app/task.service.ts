import { Injectable } from "@angular/core";
import { Task } from "./task";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class TaskService {
  private _url: string = "http://i875395.hera.fhict.nl/api/380591/task";
  constructor(private http: HttpClient) {}

  getAPITasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this._url);
  }

  addTask(task: Object): Observable<any> {
    return this.http.post<Task>(this._url, task, httpOptions);
  }

  updateTask(task: Task | number): Observable<any> {
    var id = typeof task === "number" ? task : task.id;
    var url = `${this._url}/?id=${id}`;
    return this.http.put(url, task, httpOptions);
  }

  getTask<Data>(id: number): Observable<Task> {
    const url = `${this._url}/${id}`;
    return this.http.get<Task>(url);
  }

  deleteTask(task: Task | number): Observable<Task> {
    var id = typeof task === "number" ? task : task.id;
    var url = `${this._url}/?id=${id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

}
