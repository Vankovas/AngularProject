import { Department } from "./department";
import { Employee } from "./employee";


export interface ITask {
  id: number;
  name: string;
  employees: number[];
}

export class Task implements ITask {
  id:number;
  name:string;
  employees:number[];
}

// OLD CODE BEFORE HTTP
// export class Task {
//   id: number;
//   name: String;
//   employees: Employee[];
//   departments: Department[];
//   timeDone: string;

//   constructor(
//     id?: number,
//     name?: string,
//     departments?: Department[],
//     employees?: Employee[],
//     timeDone?: string
//   ) {
//     this.id = id || 0;
//     this.name = name;
//     this.employees = employees;
//     this.departments = departments;
//     this.timeDone = timeDone;
//   }
// }
