import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-todo-form',
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.css'],
})
export class NewTodoFormComponent implements OnInit {
  constructor() {}
  showNewForm = false;
  defaultErrState = { title: '', description: '', submit: '' };
  errors = this.defaultErrState;

  titleHasErrs = false;
  descriptionHasErrs = false;

  ngOnInit(): void {}

  toggleShowNewForm(): void {
    this.errors = this.defaultErrState;
    this.titleHasErrs = false;
    this.descriptionHasErrs = false;
    this.showNewForm = !this.showNewForm;
  }

  addTodo(title: HTMLInputElement, description: HTMLInputElement): void {
    if (title.value && description.value) {
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
}
