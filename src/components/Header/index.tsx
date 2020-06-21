import React, { FC, ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import styled from 'styled-components/native';

import { getScene } from '../../getters/Global';

import { setHeaderAction } from '../../actions/Global';
import { IHeaderStatus } from '../../types/store/global';

const Wrap: any = styled.View`
  width: 100%;
  background-color: #000;
  position: relative;
  z-index: 1;
  padding: ${(props: any) => props.barHeight + 10}px 20px 20px;
`;

const Text: any = styled.Text`
  font-size: 24px;
  color: #61dafb;
  text-align: center;
`;

const Header: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const sceneState = useSelector(getScene);

  // headerの情報を格納
  const setHeader = useCallback((e: any) => {
    const payload = e.nativeEvent.layout as IHeaderStatus;

    dispatch(setHeaderAction(payload));
  }, []);

  return (
    <Wrap barHeight={getStatusBarHeight()} onLayout={setHeader}>
      <Text>{sceneState}</Text>
    </Wrap>
  );
};

export default Header;
