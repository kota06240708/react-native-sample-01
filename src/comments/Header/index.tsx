import React, { FC, ReactElement, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import styled from 'styled-components/native'

import { setHeightAction } from '../../actions/Global'
import { IHeaderStatus } from '../../types/store/global'

const Wrap: any = styled.View`
  width: 100%;
  background-color: #000;
  padding: ${(props: any) => props.barHeight}px 20px 20px;
`

const Text: any = styled.Text`
  font-size: 24px;
  color: #61dafb;
  text-align: center;
`

const Header: FC = (): ReactElement => {
  const dispatch = useDispatch()

  // headerの情報を格納
  const setHeader = useCallback((e: any) => {
    const payload = e.nativeEvent.layout as IHeaderStatus

    dispatch(setHeightAction(payload))
  }, [])

  return (
    <Wrap barHeight={getStatusBarHeight()} onLayout={setHeader}>
      <Text>Header</Text>
    </Wrap>
  )
}

export default Header
