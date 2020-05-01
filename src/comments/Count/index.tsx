import React, { FC, ReactElement } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components/native'

import IState from '../../types/store'

import { countUp } from '../../actions/AppAction'
// import { Text } from 'react-native'

const Wrap: any = styled.View`
  width: 100%;
`

const View: any = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`

const Text: any = styled.Text`
  color: #ccc;
  font-size: 40px;
`

const ButtonWrap: any = styled.View`
  width: 50%;
  background-color: #000;
  color: #fff;
  margin: 0 auto;
`

const Button: any = styled.Button`
  width: 100%;
  padding: 10px;
`

const Count: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(countUp())

  const appSelecter = useSelector((state: IState) => state.app.count);

  return (
    <Wrap>
      <View>
        <Text>{appSelecter}</Text>
      </View>
      <ButtonWrap>
        <Button
          title="Couny Up"
          color="#fff"
          onPress={onClick}
        />
      </ButtonWrap>
    </Wrap>
  )
}

export default Count
