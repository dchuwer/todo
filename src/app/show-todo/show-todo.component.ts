import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo';


@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {
  checked = false;
  @Input() todo: Todo = new Todo();
  @Output() onDeleteClick: EventEmitter<Todo> = new EventEmitter();
  @Output() completeClick: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService : TodoService) { }

  deleteClick(todo){
    this.onDeleteClick.emit(todo.id);
  }

  complete(todo) {
     this.completeClick.emit(todo);
  }


  ngOnInit() {
    let todos = this.todoService.getTodo();
  }

}
