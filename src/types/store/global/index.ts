export interface IHeaderStatus {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface IFooterStatus extends IHeaderStatus {}

export interface IGlobal {
  header: IHeaderStatus | null;
  footer: IFooterStatus | null;
}
