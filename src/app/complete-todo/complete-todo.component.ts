import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-complete-todo',
  templateUrl: './complete-todo.component.html',
  styleUrls: ['./complete-todo.component.css']
})
export class CompleteTodoComponent implements OnInit {
  
  countComplete : number = 0;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.countComplete = this.todoService.getCountComplete();
    this.todoService.completeUpdated.subscribe((newCounter) => {
      this.countComplete = newCounter;
    });
  }

}
