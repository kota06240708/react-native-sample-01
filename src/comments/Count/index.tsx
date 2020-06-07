import React, { FC, ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import IState from '../../types/store'

import { countUp } from '../../actions/AppAction'

const Wrap: any = styled.View`
  width: 100%;
`

const Views: any = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`

const Text: any = styled.Text`
  color: #ccc;
  font-size: 40px;
  text-align: center;
`

const ButtonWrap: any = styled.View`
  width: 50%;
  margin: 0 auto;
`

const Button: any = styled.TouchableHighlight`
  width: 100%;
  background-color: #000;
  padding: 10px 40px;
`

const Count: FC = (): ReactElement => {
  const dispatch = useDispatch()
  const onClick = () => dispatch(countUp())

  const appSelecter = useSelector((state: IState) => state.app.count)

  return (
    <Wrap>
      <Views>
        <Text>{appSelecter}</Text>
      </Views>
      <ButtonWrap>
        <Button onPress={onClick}>
          <Text>ちんこ</Text>
        </Button>
      </ButtonWrap>
    </Wrap>
  )
}

export default Count
