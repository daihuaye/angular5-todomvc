import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFilterPipe } from './shared/pipes/todo-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
