import { IApp } from './app'
import { IGlobal } from './global'
import { ITodo } from './Todo'

export interface IAction {
  type: string
  payload: { [key: string]: any }
}

export interface IState {
  app: IApp
  global: IGlobal
  todo: ITodo
}
