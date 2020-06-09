import { Dispatch, AnyAction } from 'redux'
import { ITodoList } from '../../types/store/Todo'
import { IState, IAction } from '../../types/store'
import * as types from '../../constants/store/todo/store'

// Todoリストをセットアップ
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

// 指定したTodoを削除
export const deleteTodoListAction: (
  key: number
) => (dispatch: Dispatch<AnyAction>, getState: () => IState) => IAction = (
  key: number
) => (dispatch: Dispatch, getState: () => IState) => {
  const todos = getState().todo.todos.filter((r: ITodoList, i: number) => {
    return i !== key
  })

  return dispatch({
    type: types.SET_TODO_LIST,
    payload: {
      data: todos
    }
  })
}

// コンプリートの状態を更新
export const updateCompleteAction: (
  key: number
) => (dispatch: Dispatch<AnyAction>, getState: () => IState) => IAction = (
  key: number
) => (dispatch: Dispatch, getState: () => IState) => {
  const todos = [...getState().todo.todos]

  todos[key].isComplete = !todos[key].isComplete

  return dispatch({
    type: types.SET_TODO_LIST,
    payload: {
      data: todos
    }
  })
}
