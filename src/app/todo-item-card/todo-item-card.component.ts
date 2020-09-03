import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../todo-list/todo.model';

@Component({
  selector: 'app-todo-item-card',
  templateUrl: './todo-item-card.component.html',
  styleUrls: ['./todo-item-card.component.css'],
})
export class TodoItemCardComponent implements OnInit {
  @Input() todo: TodoItem;
  constructor() {}

  get todoDetails(): TodoItem {
    return this.todo;
  }

  ngOnInit(): void {}
}
