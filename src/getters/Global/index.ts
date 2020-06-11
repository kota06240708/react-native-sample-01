import { IState } from '../../types/store';

export const getHeaderHeight: (state: IState) => number = (state: IState) => {
  if (state.global.header === null) {
    return 60;
  }

  return state.global.header.height;
};

export const getFooterHeight: (state: IState) => number = (state: IState) => {
  if (state.global.footer === null) {
    return 60;
  }

  return state.global.footer.height;
};
