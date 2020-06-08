import { Action, Reducer } from 'redux'

import * as types from '../../constants/store/Global'
import {
  IGlobal,
  IHeaderStatusAction,
  IFooterStatusAction
} from '../../types/store/global'

/**
 * State の初期値
 */
const initState: IGlobal = {
  header: null,
  footer: null
}

/**
 * Reducer 関数
 * @param state 現在のステート
 * @param action 渡されたアクション
 */
const GlobalReducer: Reducer<IGlobal> = (
  state: IGlobal = initState,
  action: Action
) => {
  let _action: any

  switch (action.type) {
    case types.SET_HEADER_STATUS:
      _action = action as IHeaderStatusAction

      return {
        ...state,
        header: _action.payload
      }
      break
    case types.SET_FOOTER_STATUS:
      _action = action as IFooterStatusAction

      return {
        ...state,
        header: _action.payload
      }
      break
    default:
      return state
      break
  }
}

export default GlobalReducer
