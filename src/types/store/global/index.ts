import { Action } from 'redux'

export interface IHeaderStatus {
  width: number
  height: number
  x: number
  y: number
}

export interface IFooterStatus extends IHeaderStatus {}

export interface IHeaderStatusAction extends Action {
  payload: IHeaderStatus
}

export interface IFooterStatusAction extends Action {
  payload: IFooterStatus
}

export interface IGlobal {
  header: IHeaderStatus | null
  footer: IFooterStatus | null
}
