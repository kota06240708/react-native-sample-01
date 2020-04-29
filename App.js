import React from 'react'
import styled from 'styled-components/native'
// import { Text } from 'react-native'

const CenterView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text`
  color: #ccc;
  font-size: 40px;
`

export default function App () {
  console.log('hhh')
  return (
    <CenterView>
      <Text>Open up App.js to start working on!</Text>
    </CenterView>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
