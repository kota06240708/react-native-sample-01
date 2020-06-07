import { IHeaderStatus, IHeaderStatusAction } from '../../types/store/global'
import { Dispatch, AnyAction } from 'redux'
import * as types from '../../constants/store/Global'

export const setHeightAction: (
  data: IHeaderStatus
) => (dispatch: Dispatch<AnyAction>) => IHeaderStatusAction = (
  data: IHeaderStatus
) => (dispatch: Dispatch) =>
  dispatch({
    type: types.SET_HEADER_STATUE,
    payload: data
  })
