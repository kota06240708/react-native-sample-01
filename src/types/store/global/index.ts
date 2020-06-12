import firebase from 'firebase';

export interface IHeaderStatus {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface IFooterStatus extends IHeaderStatus {}

export interface IGlobal {
  firebase: typeof firebase | null;
  header: IHeaderStatus | null;
  footer: IFooterStatus | null;
}
