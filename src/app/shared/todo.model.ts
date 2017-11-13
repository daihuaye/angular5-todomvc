import { TodoItem } from './interface/todo-item';
import * as util from './utilities';

export class TodoModel {
  public todo: TodoItem;
  constructor(content: string) {
    this.todo = {
      id: util.s4(),
      content: content,
      isCompleted: false,
      isRemoved: false
    };
  }
}
