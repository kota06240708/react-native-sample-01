import React, { FC, ReactElement } from 'react'
import { Provider } from 'react-redux';

import store from './src/store'
import styled from 'styled-components/native'

import Count from './src/comments/Count';
// import { Text } from 'react-native'

const CenterView: any = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

// const Text: any = styled.Text`
//   color: #ccc;
//   font-size: 40px;
// `

const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <CenterView>
        <Count />
      </CenterView>
    </Provider>
  )
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
