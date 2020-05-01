import clone from 'clone'
import { Action, Reducer } from 'redux'

import { UPDATE_MESSAGE } from '../../actions/AppAction'
import { IApp } from '../../types/store/app'

/**
 * State の初期値
 */
const initState: IApp = {
  count: 0
}

/**
 * Reducer 関数
 * @param state 現在のステート
 * @param action 渡されたアクション
 */
const appReducer: Reducer<IApp> = (state: IApp = initState, action: Action) => {
  let newState = state
  switch (action.type) {
    case UPDATE_MESSAGE:
      newState = clone(state)
      newState.count = state.count + 1

      return {
        count: newState.count
      }
      break
    default:
      return state
      break
  }
  // ここで返すオブジェクトが前回と異なるなら、関連する Component が再描画される。
  return newState
}

export default appReducer
