import { Component } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoType } from './todo-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todoItems: TodoItem[] = [];
  public filterType: TodoType = TodoType.ALL;

  constructor() {
    this.todoItems = [{
      id: 1,
      content: 'hello world',
      isCompleted: false,
      isRemoved: false,
    }, {
      id: 2,
      content: 'Go to Costco',
      isCompleted: true,
      isRemoved: true
    }];
  }

  createTodoItem(content) {
    const newId = this.todoItems.length + 1;
    return {
      id: newId,
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
