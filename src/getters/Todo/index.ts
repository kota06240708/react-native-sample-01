import { IState } from '../../types/store'
import { ITodoList, ITodoListReverse } from '../../types/store/Todo'

// todoのリストを返す
export const getTodoList: (state: IState) => ITodoList[] = (state: IState) =>
  state.todo.todos

// 反転したtodoのリストを返す
export const getTodoListReverse: (state: IState) => ITodoListReverse[] = (
  state: IState
) => {
  const todos: Array<ITodoListReverse> = []

  state.todo.todos.forEach((r: ITodoList, i: number) => {
    const { title, isComplete } = r

    const result: ITodoListReverse = {
      key: i,
      title,
      isComplete
    }

    todos[i] = result
  })

  return todos.length !== 0 ? todos.reverse() : todos
}
