import { Employee } from "./employee";
export interface IDepartment {
  id: number;
  name: string;
  building: string;
  employees: number[];
}

export class Department implements IDepartment {
  id: number;
  name: string;
  building: string;
  employees: number[];
}

// export class Department {
//   id: number;
//   name: String;
//   employees: Employee[];
//   constructor(id?: number, name?: string, employees?: Employee[]) {
//     this.id = id;
//     this.name = name;
//     this.employees = employees;
//   }
// }
