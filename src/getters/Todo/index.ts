import { IState } from '../../types/store'
import { ITodoList } from '../../types/store/Todo'

export const getTodoList: (state: IState) => ITodoList[] = (state: IState) =>
  state.todo.todos
