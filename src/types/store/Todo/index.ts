export interface ITodoList {
  title: string
  isComplet: boolean
}

export interface ITodo {
  todos: Array<ITodo>
}
