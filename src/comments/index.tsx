import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { initDatas } from '../constants/store/todo';
import { setTodoListAction } from '../actions/Todo';

import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';

const Wrap: any = styled.View`
  width: 100%;
  position: relative;
  flex: 1;
`;

const Index: FC = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodoListAction(initDatas));
  }, []);

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
