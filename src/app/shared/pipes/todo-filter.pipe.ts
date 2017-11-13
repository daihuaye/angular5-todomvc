import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoType } from './todo-type.enum';

@Pipe({
  name: 'todoFilter',
  pure: false
})
export class TodoFilterPipe implements PipeTransform {

  transform(value: TodoItem[], type: TodoType = TodoType.ALL): any {
    if (!value) {
      return;
    }
    if (value && value.length === 0) {
      return;
    }

    let result;
    switch (type) {
      case TodoType.ACTIVE:
        result = value.filter(i => {
          return !i.isRemoved && !i.isCompleted;
        });
        break;
      case TodoType.COMPLETED:
        result = value.filter(i => {
          return !i.isRemoved && i.isCompleted;
        });
        break;
      default:
        result = value.filter(i => {
          return !i.isRemoved;
        });
        break;
    }
    return result;
  }

}
