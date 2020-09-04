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
  layoutOptions: { card: string; table: string };

  // NEW TODO ITEM FORM
  showNewForm = false;
  defaultErrState = { title: '', description: '', submit: '' };
  errors = this.defaultErrState;

  constructor() {
    this.layoutOptions = {
      card: 'CARD',
      table: 'TABLE',
    };

    this.todos = new TodoItemsList();
    this.layoutSelected = this.layoutOptions.table; // initialize with table
  }

  toggleShowNewForm(): void {
    this.errors = this.defaultErrState;
    this.showNewForm = !this.showNewForm;
  }

  addTodo(title: HTMLInputElement, description: HTMLInputElement): void {
    if (title.value && description.value) {
      this.todos.createNew(title.value, description.value);
      this.toggleShowNewForm();
      return;
    }

    if (title.value === '') {
      this.errors = { ...this.errors, title: 'A title is required' };
    }
    if (description.value === '') {
      this.errors = {
        ...this.errors,
        description: 'A description is required',
      };
    }
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

  ngOnInit(): void {}
}
