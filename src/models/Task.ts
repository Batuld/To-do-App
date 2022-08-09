import { BaseModel } from "./Base";

export class Task extends BaseModel {
  name: string;
  completed: boolean;

  constructor(name: string) {
    super();
    this.name = name;
    this.completed = false;
  }
}

export default Task;