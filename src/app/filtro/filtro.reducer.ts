import { createReducer, on } from '@ngrx/store';
import { setFiltro } from './filtro.actions';

export const estadoInicial = 'todos';

export const filtroReducer = createReducer(
  estadoInicial,
  on(setFiltro, (state, { filtro }) => filtro)
);
