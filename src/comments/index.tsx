import React, { FC, ReactElement } from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

import Header from './Header'
import Count from './Count'
import Footer from './Footer'

const Wrap: any = styled.View`
  width: 100%;
  position: relative;
  flex: 1;
`

const Index: FC = (): ReactElement => {
  StatusBar.setBarStyle('light-content', true)

  return (
    <Wrap>
      <Header />
      <Count />
      <Footer />
    </Wrap>
  )
}

export default Index
