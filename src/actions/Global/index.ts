import { IState } from '../../types/store'

import {
  IHeaderStatus,
  IHeaderStatusAction,
  IFooterStatus,
  IFooterStatusAction
} from '../../types/store/global'
import { Dispatch, AnyAction } from 'redux'
import * as types from '../../constants/store/Global'

export const setHeaderAction: (
  data: IHeaderStatus
) => (
  dispatch: Dispatch<AnyAction>,
  getState: () => IState
) => IHeaderStatusAction = (data: IHeaderStatus) => (
  dispatch: Dispatch,
  getState: () => IState
) => {
  console.log(getState())

  return dispatch({
    type: types.SET_HEADER_STATUE,
    payload: data
  })
}

export const setFooterAction: (
  data: IFooterStatus
) => (dispatch: Dispatch<AnyAction>) => IFooterStatusAction = (
  data: IFooterStatus
) => (dispatch: Dispatch) =>
  dispatch({
    type: types.SET_FOOTER_STATUE,
    payload: data
  })
