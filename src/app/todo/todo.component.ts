import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {
  todos = [];
  
  constructor(private todoService: TodoService) { }

  deleteItem(todoId){
    this.todoService.delete(todoId);
  }

  complete(todoItem){
    this.todoService.addComplete();
  }

  ngOnInit() {
    this.todos = this.todoService.getTodo();
    this.todoService.todoUpdated.subscribe( (newTodo) => {
      this.todos = newTodo;
    })
  }
 
}
