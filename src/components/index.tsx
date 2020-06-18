import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { setFirebase } from '../actions/Global';
import { setTodoListAction } from '../actions/Todo';

import { ITodoList } from '../types/store/Todo';
import firebase from '../utils/firebase';

import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';

type TFirebaseSnapShot = firebase.firestore.QuerySnapshot<
  firebase.firestore.DocumentData
>;

type TFirebaseSnapShotDoc = firebase.firestore.QueryDocumentSnapshot<
  firebase.firestore.DocumentData
>;

const Wrap: any = styled.View`
  width: 100%;
  position: relative;
  flex: 1;
`;

const Index: FC = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFirebase(firebase));

    firebase
      .firestore()
      .collection('todo')
      .onSnapshot((querySnapshot: TFirebaseSnapShot) => {
        const result: Array<ITodoList> = [];

        querySnapshot.forEach((doc: TFirebaseSnapShotDoc) => {
          const data = doc.data() as ITodoList;
          data.key = doc.id;

          result.push(data);
        });

        dispatch(setTodoListAction(result));
      });
  }, []);

  // firebase
  // .firestore()
  // .collection('test')
  // .add({
  //   name: 'Los Angeles',
  //   state: 'CA',
  //   country: 'USA'
  // })
  // .then(() => {
  //   console.log('成功');
  // })
  // .catch(function (error) {
  //   console.error('失敗', error);
  // });

  StatusBar.setBarStyle('light-content', true);

  return (
    <Wrap>
      <Header />
      <Todo />
      <Footer />
    </Wrap>
  );
};

export default Index;
