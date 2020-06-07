import { combineReducers } from 'redux'

import appReducer from './AppAction'
import GlobalReducer from './Global'

import IState from '../types/store'

const reducers = combineReducers<IState>({
  app: appReducer,
  global: GlobalReducer
})

export default reducers
