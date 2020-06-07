import React, { FC, ReactElement } from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

import Header from './Header'
import Count from './Count'

const Wrap: any = styled.View`
  width: 100%;
  position: relative;
`

const Index: FC = (): ReactElement => {
  StatusBar.setBarStyle('light-content', true)

  return (
    <Wrap>
      <Header />
      <Count />
    </Wrap>
  )
}

export default Index
