import { Dispatch, AnyAction } from 'redux'

import { IState, IAction } from '../../types/store'
import { IHeaderStatus, IFooterStatus } from '../../types/store/global'

import * as types from '../../constants/store/global'

export const setHeaderAction: (
  data: IHeaderStatus
) => (dispatch: Dispatch<AnyAction>, getState: () => IState) => IAction = (
  data: IHeaderStatus
) => (dispatch: Dispatch, getState: () => IState) => {
  console.log(getState())

  return dispatch({
    type: types.SET_HEADER_STATUE,
    payload: data
  })
}

export const setFooterAction: (
  data: IFooterStatus
) => (dispatch: Dispatch<AnyAction>) => IAction = (data: IFooterStatus) => (
  dispatch: Dispatch
) =>
  dispatch({
    type: types.SET_FOOTER_STATUE,
    payload: data
  })
