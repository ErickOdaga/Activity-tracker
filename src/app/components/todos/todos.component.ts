import { Component, OnInit } from '@angular/core';
import { todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:todo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Outline the tasks to upgrade this app',
        complete: false
      },
      {
        content: 'Finish setting vsti website app',
        complete: false
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.complete = !v.complete;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      complete: false
    });

    this.inputTodo = "";
  }

}