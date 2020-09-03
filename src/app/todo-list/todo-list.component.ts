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

  // NEW TODO ITEM FORM
  showNewForm = false;
  defaultErrState = { title: '', description: '', submit: '' };
  errors = this.defaultErrState;

  titleHasErrs = false;
  descriptionHasErrs = false;

  constructor() {
    this.todos = new TodoItemsList();
    this.tableLayoutType = 'TABLE';
    this.cardLayoutType = 'CARD';
    this.layoutSelected = this.tableLayoutType; // initialize with table
  }

  toggleShowNewForm(): void {
    this.errors = this.defaultErrState;
    this.titleHasErrs = false;
    this.descriptionHasErrs = false;
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
      this.titleHasErrs = true;
    }
    if (description.value === '') {
      this.errors = {
        ...this.errors,
        description: 'A description is required',
      };
      this.descriptionHasErrs = true;
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
