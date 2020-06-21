import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { setFirebase } from '../actions/Global';
import { setTodoListAction } from '../actions/Todo';

import { getScene } from '../getters/Global';

import { ITodoList } from '../types/store/Todo';
import firebase from '../utils/firebase';

import Header from './Header';
import Todo from './Todo';
import Camera from './Camera';
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

  const sceneState = useSelector(getScene);

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

  StatusBar.setBarStyle('light-content', true);

  const scene = () => {
    let result = null;

    if (sceneState === 'Camera') {
      result = <Camera />;
    } else if (sceneState === 'Todo') {
      result = <Todo />;
    }

    return result;
  };

  return (
    <Wrap>
      <Header />
      {scene()}
      <Footer />
    </Wrap>
  );
};

export default Index;
