import { data } from 'src/assets/fakeData';

export class TodoItem {
  constructor(
    public title: string,
    public description: string,
    public done: boolean
  ) {}
}

export class TodoItemsList {
  todos: TodoItem[];
  constructor() {
    this.todos = data.todos.map(
      (t) => new TodoItem(t.title, t.description, t.done)
    );
  }

  listTodos(): TodoItem[] {
    return this.todos;
  }

  toggleDone(title: string): void {
    const todo = this.todos.find((t) => t.title === title);
    todo.done = !todo.done;
  }

  createNew(title: string, description: string): void {
    this.todos = [...this.todos, new TodoItem(title, description, false)];
  }
}
