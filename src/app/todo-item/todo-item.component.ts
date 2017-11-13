import { Component, OnInit, DoCheck, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TodoItem } from '../shared/interface/todo-item';
import { Element } from '@angular/compiler';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, DoCheck {
  @Input() item: TodoItem;
  @Output() itemOnRemove = new EventEmitter();

  @ViewChild('checbox') checkboxChild: ElementRef;

  constructor() {
  }

  ngOnInit() {
    // this.checkboxChild.nativeElement.checked = this.item.isCompleted;
  }

  ngDoCheck() {
    this.checkboxChild.nativeElement.checked = this.item.isCompleted;
  }

  removeItem() {
    this.itemOnRemove.emit(this.item);
  }

  checkboxOnClick(isChecked) {
    this.item.isCompleted = isChecked;
  }
}
