import { Action } from 'redux'

export interface IHeaderStatus {
  width: number
  height: number
  x: number
  y: number
}

export interface IHeaderStatusAction extends Action {
  payload: IHeaderStatus
}

export interface IGlobal {
  header: IHeaderStatus | null
}
