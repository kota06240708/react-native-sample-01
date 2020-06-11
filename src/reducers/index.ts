import { combineReducers } from 'redux';

import GlobalReducer from './Global';
import TodoReducer from './Todo';

import { IState } from '../types/store';

const reducers = combineReducers<IState>({
  todo: TodoReducer,
  global: GlobalReducer
});

export default reducers;
