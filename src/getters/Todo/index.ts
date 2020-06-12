import { IState } from '../../types/store';
import { ITodoList } from '../../types/store/Todo';

// todoのリストを返す
export const getTodoList: (state: IState) => ITodoList[] = (state: IState) =>
  state.todo.todos;

// 反転したtodoのリストを返す
export const getTodoListReverse: (state: IState) => ITodoList[] = (
  state: IState
) => {
  const todos: Array<ITodoList> = [...state.todo.todos];

  if (todos.length === 0) {
    return todos;
  }

  todos.sort((a: ITodoList, b: ITodoList) => {
    return a.createdAt < b.createdAt ? 1 : -1;
  });

  return todos;
};
