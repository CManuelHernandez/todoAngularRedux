import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState {
  todo: Todo[];
  filtro: string;
}

export const appReducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
  filtro: filtroReducer,
};
