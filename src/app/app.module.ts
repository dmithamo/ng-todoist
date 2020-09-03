import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { TodoItemCardComponent } from './todo-item-card/todo-item-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CopyrightComponent,
    TodoItemCardComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faThList, faCreditCard);
  }
}
