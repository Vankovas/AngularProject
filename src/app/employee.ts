import { Department } from "./department";
export interface IEmployee {
  id: number;
  department_id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
}

export class Employee implements IEmployee {
  id: number;
  department_id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
}

// export class Employee {
//   id: number;
//   name: String;
//   departments : Department[];
//   constructor(id?: number, name?: string, departments?: Department[]) {
//     this.id = id;
//     this.name = name;
//     this.departments = departments;
//   }
// }
