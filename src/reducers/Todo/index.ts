import { Action, Reducer } from 'redux'

import * as types from '../../constants/store/todo/store'

import { IAction } from '../../types/store'
import { ITodo } from '../../types/store/Todo'

/**
 * State の初期値
 */
const initState: ITodo = {
  todos: []
}

/**
 * Reducer 関数
 * @param state 現在のステート
 * @param action 渡されたアクション
 */
const TodoReducer: Reducer<ITodo> = (
  state: ITodo = initState,
  action: Action
) => {
  let _action: any

  switch (action.type) {
    case types.SET_TODO_LIST:
      _action = action as IAction

      return {
        ...state,
        todos: _action.payload.data
      }
      break
    default:
      return state
      break
  }
}

export default TodoReducer
