import React, { FC, ReactElement, useState, useRef } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Card, Input, Button, Icon } from 'react-native-elements';

import { ITodoList } from '../../types/store/Todo';

import {
  deleteTodoListAction,
  updateCompleteAction,
  addTodoAction
} from '../../actions/Todo';

import { getHeaderHeight, getFooterHeight } from '../../getters/Global';
import { getTodoListReverse } from '../../getters/Todo';

import CardList from './Card/List';

const Wrap: any = styled.View`
  width: 100%;
`;

const SendWrap: any = styled.View`
  width: 100%;
  padding: 20px 20px 0;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputWrap: any = styled.View`
  width: 75%;
`;

const ButtonWrap: any = styled.View`
  width: 20%;
  padding-bottom: 20px;
`;

const ScrollView: any = styled.ScrollView`
  width: 100%;
`;

const Inner: any = styled.View`
  width: 100%;
  padding-bottom: ${(props: any) => props.bottomPadding + 200}px;
`;

const CardListWrap: any = styled.View`
  width: 100%;
  border-bottom-width: ${(props: any) => props.width}px;
  border-bottom-color: rgba(204, 204, 204, 0.5);
`;

const CardWrap: any = styled.View`
  width: 100%;
  margin-bottom: 60px;
`;

const Todo: FC = (): ReactElement => {
  const ref: any = useRef(null);

  const [value, updateValue] = useState<string>('');
  const [isDisable, updateDisable] = useState<boolean>(true);

  const dispatch = useDispatch();

  // todoリスト
  const todos = useSelector(getTodoListReverse);

  // headerのheight
  const headerHeight = useSelector(getHeaderHeight);

  // footerの高さ
  const footerHeight = useSelector(getFooterHeight);

  // 指定のtodoを削除
  const deleteTodo = (key: string) => {
    dispatch(deleteTodoListAction(key));
  };

  // コンプリートのboolean値を更新
  const updateComplete = (key: string) => {
    dispatch(updateCompleteAction(key));
  };

  // todoを追加
  const addTodo = () => {
    dispatch(addTodoAction(value));
    updateValue('');
    updateDisable(true);

    Keyboard.dismiss(); // キーボードをしまう

    if (ref) {
      if (ref.current === null) {
        return;
      }

      ref.current.scrollTo({ y: 0 }); // 一番上に戻す
    }
  };

  // inputの処理
  const onInput = (text: string) => {
    updateValue(text);
    updateDisable(!!(text.length === 0));
  };

  // todoのリスト
  const lists = todos.map((r: ITodoList, i: number) => {
    const { title, isComplete, key } = r;

    return (
      <CardListWrap key={i} width={i !== todos.length - 1 ? 2 : 0}>
        <CardList
          title={title}
          isComplete={isComplete}
          onClickComplete={() => updateComplete(key)}
          onClickDelete={() => deleteTodo(key)}
        />
      </CardListWrap>
    );
  });

  return (
    <Wrap>
      <SendWrap>
        <InputWrap>
          <Input
            placeholder='ADD TODO'
            onChangeText={(text: string) => onInput(text)}
            value={value}
          />
        </InputWrap>
        <ButtonWrap>
          <Button
            icon={<Icon name='send' size={15} color='white' />}
            buttonStyle={{ backgroundColor: '#1fa67a' }}
            disabledStyle={{ opacity: 0.5 }}
            onPress={addTodo}
            disabled={isDisable}
          />
        </ButtonWrap>
      </SendWrap>
      <ScrollView ref={ref}>
        <Inner topPadding={headerHeight} bottomPadding={footerHeight}>
          <CardWrap>
            <Card containerStyle={{ padding: 0 }}>{lists}</Card>
          </CardWrap>
        </Inner>
      </ScrollView>
    </Wrap>
  );
};

export default Todo;
