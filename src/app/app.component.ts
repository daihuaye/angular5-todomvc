import { Component } from '@angular/core';
import { TodoItem } from './shared/interface/todo-item';
import { TodoType } from './shared/todo-type.enum';
import * as util from './shared/utilities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todoItems: TodoItem[] = [];
  public filterType: TodoType = TodoType.ALL;

  constructor() {

    this.todoItems = [];
  }

  createTodoItem(content) {
    return {
      id: util.s4(),
      content: content,
      isCompleted: false,
      isRemoved: false
    };
  }

  removeItem(item) {
    const itemToRemoved = this.todoItems.find(i => {
      return i.id === item.id;
    });

    itemToRemoved.isRemoved = true;
  }

  onEnter(item) {
    if (item && item.value.length === 0) {
      return;
    }
    const newItem = this.createTodoItem(item.value);
    this.todoItems.unshift(newItem);
    item.value = '';
  }

  getNumOfNotCompleted() {
    const itemsNotCompleted = this.todoItems.filter(i => {
      return !i.isCompleted && !i.isRemoved;
    });
    const notCompletedLength = itemsNotCompleted.length;

    return notCompletedLength;
  }

  filterTodo(type: TodoType) {
    this.filterType = type;
  }

  completeAllOnChange(isCompletedAll) {
    this.todoItems.forEach(i => {
      i.isCompleted = isCompletedAll;
    });
  }

  clearCompleted() {
    for (const item of this.todoItems) {
      if (item.isCompleted) {
        item.isRemoved = true;
      }
    }
  }
}
