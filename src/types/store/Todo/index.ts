export interface ITodoList {
  title: string
  isComplete: boolean
}

export interface ITodo {
  todos: Array<ITodoList>
}
