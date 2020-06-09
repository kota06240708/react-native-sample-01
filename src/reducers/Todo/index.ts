import * as types from '../../constants/store/todo/store'

import { IAction } from '../../types/store'
import { ITodo } from '../../types/store/Todo'

/**
 * State の初期値
 */
const initialState: ITodo = {
  todos: []
}

/**
 * Reducer 関数
 * @param state 現在のステート
 * @param action 渡されたアクション
 */
export default (state: ITodo = initialState, action: IAction) => {
  switch (action.type) {
    case types.SET_TODO_LIST:
      return {
        ...state,
        todos: action.payload.data
      }
      break
    default:
      return state
      break
  }
}
