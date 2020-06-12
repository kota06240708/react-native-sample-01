import { IState } from '../../types/store';

type TFirebaseCollection = firebase.firestore.CollectionReference<
  firebase.firestore.DocumentData
>;

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

export const getFirebaseTodo: (state: IState) => TFirebaseCollection | null = (
  state: IState
) => {
  const firebase = state.global.firebase;

  if (firebase === null) {
    return null;
  }

  return firebase.firestore().collection('todo');
};
