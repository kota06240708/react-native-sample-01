export interface ITodoList {
  key: string;
  title: string;
  isComplete: boolean;
  createdAt: number;
}

export interface ITodo {
  todos: Array<ITodoList>;
}
