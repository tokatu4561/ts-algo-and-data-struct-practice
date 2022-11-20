import { Aggregate, Iterater } from "./iterater";

type TaskType = {
  name: string;
};

export class TaskList implements Aggregate<TaskType> {
  private taskList;
  private last: number = 0;

  constructor(taskList: TaskType[]) {
    this.taskList = taskList;
  }

  createIterater() {
    return new TaskListIterater(this);
  }

  add(task: TaskType) {
    this.taskList.push(task);
    this.last++;
  }

  getTask(index: number) {
    return this.taskList[index];
  }

  getLastNum() {
    return this.last;
  }
}

class TaskListIterater implements Iterater<TaskType> {
  private list: TaskList;
  private index: number = 0;

  constructor(taskList: TaskList) {
    this.list = taskList;
  }

  public next() {
    const task = this.list.getTask(this.index);
    this.index++;
    return task;
  }

  public hasNext() {
    return this.list.getLastNum() > this.index;
  }
}
