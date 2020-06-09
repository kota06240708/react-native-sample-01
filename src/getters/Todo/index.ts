import { IState } from '../../types/store'
import { ITodo } from '../../types/store/Todo'

export const getTodoList: (state: IState) => ITodo[] = (state: IState) =>
  state.todo.todos
