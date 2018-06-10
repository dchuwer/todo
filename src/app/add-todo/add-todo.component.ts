import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo: string;
  constructor(private todoService : TodoService) { }

  addTodo(todo) {
    this.todoService.addTodo(todo)
  }
  
  ngOnInit() {
  }

}
