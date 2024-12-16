import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //this.store.select('todo').subscribe((todos) => (this.todos = todos));
    this.store.subscribe(({ todo, filtro }) => {
      this.todos = todo;
      this.filtroActual = filtro;
    });
  }
}
