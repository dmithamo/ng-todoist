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
  layoutSelected: string;
  tableLayoutType: string;
  cardLayoutType: string;

  constructor() {
    this.todos = data.todos;
    this.tableLayoutType = 'TABLE';
    this.cardLayoutType = 'CARD';
    this.layoutSelected = this.tableLayoutType; // initialize with table
  }

  get todoItems(): Todo[] {
    return this.todos;
  }

  get layoutType(): string {
    return this.layoutSelected;
  }

  toggleLayoutType(selected: string): void {
    this.layoutSelected = selected;
  }

  toggleDone(title: string): void {
    this.todos = this.todos.map((t) => ({
      ...t,
      done: t.title === title ? !t.done : t.done,
    }));
  }

  ngOnInit(): void {}
}
