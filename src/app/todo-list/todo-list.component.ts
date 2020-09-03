import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoItemsList } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: TodoItemsList;
  layoutSelected: string;
  tableLayoutType: string;
  cardLayoutType: string;

  constructor() {
    this.todos = new TodoItemsList();
    this.tableLayoutType = 'TABLE';
    this.cardLayoutType = 'CARD';
    this.layoutSelected = this.tableLayoutType; // initialize with table
  }

  get todoItems(): TodoItem[] {
    return this.todos.listTodos();
  }

  get layoutType(): string {
    return this.layoutSelected;
  }

  toggleLayoutType(selected: string): void {
    this.layoutSelected = selected;
  }

  toggleDone(title: string): void {
    this.todos.toggleDone(title);
  }

  addNew(title: string, description: string): void {
    this.todos.createNew(title, description);
  }

  ngOnInit(): void {}
}
