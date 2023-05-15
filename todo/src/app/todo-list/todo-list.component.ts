import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  taskArray = [{
    taskName: 'Adicionar tarefas',
    isCompleted: false
  }];

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });
    form.reset();
  }
  onDelete(index: number){
    this.taskArray.splice(index, 1);
  }
  onCheck(index: number){
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
  }

}
