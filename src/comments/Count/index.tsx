import React, { FC, ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { Button, Card, Icon } from 'react-native-elements'
import { IState } from '../../types/store'

import { countUp } from '../../actions/AppAction'

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

const IconWrap: any = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
const List: any = styled.View`
  width: 100%;
  padding: 20px 20px 10px;
  border-bottom-width: ${(props: any) => props.width}px;
  border-bottom-color: rgba(204, 204, 204, 0.5);
`

const ListText: any = styled.Text`
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  color: #313135;
`

const CardWrap: any = styled.View`
  width: 100%;
  margin-bottom: 60px;
`

const Count: FC = (): ReactElement => {
  const dispatch = useDispatch()
  const onClick = () => dispatch(countUp())

  const appSelecter = useSelector((state: IState) => state.app.count)
  const todos = useSelector((state: IState) => state.todo.todos)
  const getHeaderHeight = useSelector((state: IState) => {
    if (state.global.header === null) {
      return 60
    }

    return state.global.header.height
  })

  const getFooterHeight = useSelector((state: IState) => {
    if (state.global.footer === null) {
      return 60
    }

    return state.global.footer.height
  })

  const lists = todos.map((r: any, i: number) => {
    return (
      <List width={i !== todos.length - 1 ? 2 : 0} key={i}>
        <ListText>{r.title}</ListText>
        <IconWrap>
          <Icon
            raised
            name='trash'
            type='font-awesome'
            color='#238ae6'
            solid
            underlayColor='#ccc'
            onPress={() => console.log('hello')}
            containerStyle={{
              backgroundColor: '#000'
            }}
          />
          <Icon
            raised
            name='check'
            type='font-awesome'
            color='#1fa67a'
            solid
            underlayColor='#ccc'
            onPress={() => console.log('hello')}
            containerStyle={{
              backgroundColor: '#000'
            }}
          />
        </IconWrap>
      </List>
    )
  })

  return (
    <Wrap>
      <Inner topPadding={getHeaderHeight} bottomPadding={getFooterHeight}>
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
