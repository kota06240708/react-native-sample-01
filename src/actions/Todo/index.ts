// import IState from '../../types/store'
import { ITodoList } from '../../types/store/Todo'

import { Dispatch, AnyAction } from 'redux'
import { IAction } from '../../types/store'
import * as types from '../../constants/store/todo/store'

export const setTodoListAction: (
  data: Array<ITodoList>
) => (dispatch: Dispatch<AnyAction>) => IAction = (data: Array<ITodoList>) => (
  dispatch: Dispatch
) => {
  return dispatch({
    type: types.SET_TODO_LIST,
    payload: {
      data
    }
  })
}
