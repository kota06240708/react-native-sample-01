import { combineReducers, createStore } from 'redux'

import IState from '../types/store'
import appReducer from '../reducers/AppAction'

const reducers = combineReducers<IState>({
  app: appReducer
})

const store = createStore(reducers)

export default store
