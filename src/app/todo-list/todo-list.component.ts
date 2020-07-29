import { Component, OnInit } from '@angular/core';
import { data } from '../../assets/fakeData';

export interface Todo {
  title: string;
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = data.todos;
  }

  get todoItems(): Todo[] {
    return this.todos;
  }

  ngOnInit(): void {}
}
