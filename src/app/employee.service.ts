import { Injectable } from "@angular/core";
import { Employee } from "./employee";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private _url: string =  "http://i875395.hera.fhict.nl/api/380591/employee";
  constructor(private http: HttpClient) {}
   
  getAPIEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url);
  }

  addEmployee(employee: Object): Observable<any> {
    return this.http.post<Employee>(this._url, employee, httpOptions);
  }

  updateEmployee(employee: Employee | number): Observable<any> {
    var id = typeof employee === "number" ? employee : employee.id;
    var url = `${this._url}/?id=${id}`;
    return this.http.put(url, employee, httpOptions);
  }

  getEmployee<Data>(id: number): Observable<Employee> {
    const url = `${this._url}/${id}`;
    return this.http.get<Employee>(url);
  }

  deleteEmployee(employee: Employee | number): Observable<Employee> {
    var id = typeof employee === "number" ? employee : employee.id;
    var url = `${this._url}/?id=${id}`;
    return this.http.delete<Employee>(url, httpOptions);
  }

}
