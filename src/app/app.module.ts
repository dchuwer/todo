import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { TodoService } from './todo.service';
import { CompleteTodoComponent } from './complete-todo/complete-todo.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ShowTodoComponent,
    CompleteTodoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatCheckboxModule


  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
