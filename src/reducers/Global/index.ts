import * as types from '../../constants/store/global'
import { IAction } from '../../types/store'

import { IGlobal } from '../../types/store/global'

/**
 * State の初期値
 */
const initialState: IGlobal = {
  header: null,
  footer: null
}

/**
 * Reducer 関数
 * @param state 現在のステート
 * @param action 渡されたアクション
 */
export default (state: IGlobal = initialState, action: IAction) => {
  switch (action.type) {
    case types.SET_HEADER_STATUE:
      return {
        ...state,
        header: action.payload
      }
      break
    case types.SET_FOOTER_STATUE:
      return {
        ...state,
        header: action.payload
      }
      break
    default:
      return state
      break
  }
}
