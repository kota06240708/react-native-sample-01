import { Dispatch, AnyAction } from 'redux';
import firebase from 'firebase';

import { IAction } from '../../types/store';
import { IHeaderStatus, IFooterStatus } from '../../types/store/global';

import * as types from '../../constants/store/global';

export const setFirebase: (
  data: typeof firebase
) => (dispatch: Dispatch<AnyAction>) => IAction = (data: typeof firebase) => (
  dispatch: Dispatch
) =>
  dispatch({
    type: types.SET_FIREBASE,
    payload: {
      data
    }
  });

export const setHeaderAction: (
  data: IHeaderStatus
) => (dispatch: Dispatch<AnyAction>) => IAction = (data: IHeaderStatus) => (
  dispatch: Dispatch
) => {
  return dispatch({
    type: types.SET_HEADER_STATUE,
    payload: {
      data
    }
  });
};

export const setFooterAction: (
  data: IFooterStatus
) => (dispatch: Dispatch<AnyAction>) => IAction = (data: IFooterStatus) => (
  dispatch: Dispatch
) =>
  dispatch({
    type: types.SET_FOOTER_STATUE,
    payload: {
      data
    }
  });
