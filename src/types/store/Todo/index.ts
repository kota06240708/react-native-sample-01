export interface ITodoList {
  title: string;
  isComplete: boolean;
}

export interface ITodoListReverse extends ITodoList {
  key: number;
}

export interface ITodo {
  todos: Array<ITodoList>;
}
