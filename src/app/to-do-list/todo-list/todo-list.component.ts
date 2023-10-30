import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks: string[] = [
    'Buy groceries',
    'Finish Angular project',
    'Go for a run',
    'Read a book',
    'Call a friend',
  ];

   handleTaskCompletion(completedTask: string) {
    this.tasks = this.tasks.filter(task => task !== completedTask);
  }
}
