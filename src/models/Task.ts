export class Task {
  name: string;
  completed: boolean;

  constructor(name: string) {
    this.name = name;
    this.completed = false;
  }
}

export default Task;