import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() toDoList: string[] | undefined ;
  @Output() markAsCompleted = new EventEmitter();

  completedTask(task:string){
    this.markAsCompleted.emit(task)
  }
}
