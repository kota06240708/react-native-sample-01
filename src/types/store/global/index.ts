import firebase from 'firebase';

export type TScene = 'Camera' | 'Todo';

export interface IHeaderStatus {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface IFooterStatus extends IHeaderStatus {}

export interface IGlobal {
  scene: TScene;
  firebase: typeof firebase | null;
  header: IHeaderStatus | null;
  footer: IFooterStatus | null;
}
