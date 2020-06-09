import React, { FC, ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { Button, Card } from 'react-native-elements'

import { IState } from '../../types/store'
import { countUp } from '../../actions/AppAction'

import { getHeaderHeight, getFooterHeight } from '../../getters/Global'
import { getTodoList } from '../../getters/Todo'

import CardList from '../Card/List'

const Wrap: any = styled.ScrollView`
  width: 100%;
`

const Inner: any = styled.ScrollView`
  width: 100%;
  padding-bottom: ${(props: any) => props.bottomPadding + 40}px;
`

const Views: any = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`

const CardListWrap: any = styled.View`
  width: 100%;
  border-bottom-width: ${(props: any) => props.width}px;
  border-bottom-color: rgba(204, 204, 204, 0.5);
`

const Text: any = styled.Text`
  color: #313135;
  font-size: 40px;
  text-align: center;
`

const ButtonWrap: any = styled.View`
  width: 50%;
  margin: 0 auto;
`

const CardWrap: any = styled.View`
  width: 100%;
  margin-bottom: 60px;
`

const Count: FC = (): ReactElement => {
  const dispatch = useDispatch()
  const onClick = () => dispatch(countUp())

  const appSelecter = useSelector((state: IState) => state.app.count)
  const todos = useSelector(getTodoList)
  const headerHeight = useSelector(getHeaderHeight)
  const footerHeight = useSelector(getFooterHeight)

  const lists = todos.map((r: any, i: number) => {
    return (
      <CardListWrap key={i} width={i !== todos.length - 1 ? 2 : 0}>
        <CardList
          title={r.title}
          onClickComplete={() => null}
          onClickDelete={() => null}
        />
      </CardListWrap>
    )
  })

  return (
    <Wrap>
      <Inner topPadding={headerHeight} bottomPadding={footerHeight}>
        <Views>
          <Text>{appSelecter}</Text>
        </Views>
        <CardWrap>
          <Card containerStyle={{ padding: 0 }}>{lists}</Card>
        </CardWrap>
        <ButtonWrap>
          <Button
            title='Loading button'
            onPress={onClick}
            raised
            buttonStyle={{
              backgroundColor: '#000',
              paddingLeft: 10
            }}
          />
        </ButtonWrap>
      </Inner>
    </Wrap>
  )
}

export default Count
