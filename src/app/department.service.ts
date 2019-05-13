import { Injectable } from "@angular/core";
import { Department } from "./department";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class DepartmentService {
  private _url: string = "http://i875395.hera.fhict.nl/api/380591/department";
  constructor(private http: HttpClient) {}

  getAPIDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this._url);
  }

  addDepartment(department: Object): Observable<any> {
    return this.http.post<Department>(this._url, department, httpOptions);
  }

  updateDepartment(department: Department | number): Observable<any> {
    var id = typeof department === "number" ? department : department.id;
    var url = `${this._url}/?id=${id}`;
    return this.http.put(url, department, httpOptions);
  }

  getDepartment<Data>(id: number): Observable<Department> {
    const url = `${this._url}/${id}`;
    return this.http.get<Department>(url);
  }

  deleteDepartment(department: Department | number): Observable<Department> {
    var id = typeof department === "number" ? department : department.id;
    var url = `${this._url}/?id=${id}`;
    return this.http.delete<Department>(url, httpOptions);
  }
}
