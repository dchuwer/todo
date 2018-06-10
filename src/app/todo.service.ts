import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { Observable, Subject } from 'rxjs';

let TodoList = [];



@Injectable()
export class TodoService {
  
  countComplete: number = 0;
  public todoUpdated : Observable<Array<Todo>>;
  private todoSubject : Subject<Array<Todo>>;
  public completeUpdated : Observable<number>;
  private completeSubject : Subject<number>;
  todo: Todo;
  constructor() {
      this.completeSubject = new Subject<number>();
      this.completeUpdated = this.completeSubject.asObservable();
      this.todoSubject = new Subject<any>();
      this.todoUpdated = this.todoSubject.asObservable();
      
   }

  addTodo(todoItem) {
    this.todo = new Todo();
    this.todo.id = Date.now();
    this.todo.text = todoItem;
    TodoList.push(this.todo);
    this.todoSubject.next(TodoList);

  }

  getTodo() : Array<Todo> {
    return TodoList;
  }

  delete(todoId) {
    let index = this.find(todoId);
    TodoList.splice(index,1);
    this.todoSubject.next(TodoList);
  }

  addComplete(){
    this.countComplete ++;
    this.completeSubject.next(this.countComplete);
  }

  find(todoId) {
    return TodoList.findIndex(x => x.id == todoId);

  }

  getCountComplete() {
    return this.countComplete;
  }

}
