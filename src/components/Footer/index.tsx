import React, { FC, ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Icon, Button } from 'react-native-elements';

import { getScene } from '../../getters/Global';

import styled from 'styled-components/native';

import { setFooterAction, setSceneAction } from '../../actions/Global';
import { IFooterStatus, TScene } from '../../types/store/global';

const Wrap: any = styled.View`
  width: 100%;
  background-color: #000;
  padding: 20px 20px 30px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ButtonWrap: any = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ButtonInner: any = styled.View`
  width: 50%;
`;

const Footer: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const sceneState = useSelector(getScene);

  const setFooter = useCallback((e: any) => {
    const payload = e.nativeEvent.layout as IFooterStatus;

    dispatch(setFooterAction(payload));
  }, []);

  const setScene = useCallback((type: TScene) => {
    dispatch(setSceneAction(type));
  }, []);

  return (
    <Wrap barHeight={getStatusBarHeight()} onLayout={setFooter}>
      <ButtonWrap>
        <ButtonInner>
          <Button
            icon={
              <Icon name='list' type='font-awesome' size={30} color='#fff' />
            }
            buttonStyle={{
              opacity: sceneState === 'Todo' ? 1 : 0.5,
              backgroundColor: '#61dafb',
              width: '100%',
              height: '100%',
              borderRadius: -1
            }}
            onPress={() => setScene('Todo')}
          />
        </ButtonInner>
        <ButtonInner>
          <Button
            icon={
              <Icon name='camera' type='font-awesome' size={30} color='#fff' />
            }
            buttonStyle={{
              opacity: sceneState === 'Camera' ? 1 : 0.5,
              backgroundColor: '#61dafb',
              width: '100%',
              height: '100%',
              borderRadius: -1
            }}
            onPress={() => setScene('Camera')}
          />
        </ButtonInner>
      </ButtonWrap>
    </Wrap>
  );
};

export default Footer;
