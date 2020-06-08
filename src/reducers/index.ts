import { combineReducers } from 'redux'

import appReducer from './AppAction'
import GlobalReducer from './Global'
import TodoReducer from './Todo'

import { IState } from '../types/store'

const reducers = combineReducers<IState>({
  app: appReducer,
  global: GlobalReducer,
  todo: TodoReducer
})

export default reducers
