import { Dispatch, AnyAction } from 'redux';
import { ITodoList } from '../../types/store/Todo';
import { IState, IAction } from '../../types/store';
import * as types from '../../constants/store/todo/store';

type TFirebaseTransaction = firebase.firestore.Transaction;

// Todoリストをセットアップ
export const setTodoListAction: (
  data: Array<ITodoList>
) => (dispatch: Dispatch<AnyAction>) => IAction = (data: Array<ITodoList>) => (
  dispatch: Dispatch
) => {
  return dispatch({
    type: types.SET_TODO_LIST,
    payload: {
      data
    }
  });
};

// 指定したTodoを削除
export const deleteTodoListAction: (
  key: string
) => (
  dispatch: Dispatch<AnyAction>,
  getState: () => IState
) => Promise<IAction | null> = (key: string) => async (
  dispatch: Dispatch,
  getState: () => IState
) => {
  const firebase = getState().global.firebase;

  if (firebase === null) {
    return null;
  }

  const db = firebase.firestore().collection('todo');

  await db.doc(key).delete();

  return dispatch({
    type: 'test',
    payload: {
      data: { test: 'hhg' }
    }
  });
};

// todoを追加
export const addTodoAction: (
  value: string
) => (
  dispatch: Dispatch<AnyAction>,
  getState: () => IState
) => Promise<IAction | null> = (value: string) => async (
  dispatch: Dispatch,
  getState: () => IState
) => {
  const firebase = getState().global.firebase;

  if (firebase === null) {
    return null;
  }

  const db = firebase.firestore().collection('todo');

  await db.add({
    title: value,
    isComplete: false,
    createdAt: new Date().getTime()
  });

  return dispatch({
    type: 'test',
    payload: {
      data: { test: 'hhg' }
    }
  });
};

// コンプリートの状態を更新
export const updateCompleteAction: (
  key: string
) => (
  dispatch: Dispatch<AnyAction>,
  getState: () => IState
) => Promise<IAction | null> = (key: string) => async (
  dispatch: Dispatch,
  getState: () => IState
) => {
  const firebase = getState().global.firebase;

  if (firebase === null) {
    return null;
  }

  const db = firebase.firestore().collection('todo');

  firebase.firestore().runTransaction((transaction: TFirebaseTransaction) => {
    return transaction.get(db.doc(key)).then(doc => {
      if (!doc.exists) {
        throw 'Document does not exist!';
      }

      const isComplete = doc.data()!.isComplete as boolean;
      transaction.update(db.doc(key), { isComplete: !isComplete });
    });
  });

  return dispatch({
    type: 'test',
    payload: {
      data: { test: 'hhg' }
    }
  });
};
