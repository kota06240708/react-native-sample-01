import React, { FC, ReactElement, useState } from 'react'
import styled from 'styled-components/native'
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
  const [getState, setState]: any = useState<number>(0)

  const countUp = () => {
    setState(getState + 1);
  }

  return (
    <Wrap>
      <View>
        <Text>{getState}</Text>
      </View>
      <ButtonWrap>
        <Button
          title="Couny Up"
          color="#fff"
          onPress={() => countUp()}
        />
      </ButtonWrap>
    </Wrap>
  )
}

export default Count