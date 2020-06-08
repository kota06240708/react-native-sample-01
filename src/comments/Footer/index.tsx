import React, { FC, ReactElement, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import styled from 'styled-components/native'

import { setFooterAction } from '../../actions/Global'
import { IFooterStatus } from '../../types/store/global'

const Wrap: any = styled.View`
  width: 100%;
  background-color: #000;
  padding: 20px 20px 30px;
  position: absolute;
  bottom: 0;
  left: 0;
`

const Text: any = styled.Text`
  font-size: 24px;
  color: #61dafb;
  text-align: center;
`

const Footer: FC = (): ReactElement => {
  const dispatch = useDispatch()

  const setFooter = useCallback((e: any) => {
    const payload = e.nativeEvent.layout as IFooterStatus

    dispatch(setFooterAction(payload))
  }, [])

  return (
    <Wrap barHeight={getStatusBarHeight()} onLayout={setFooter}>
      <Text>Footer</Text>
    </Wrap>
  )
}

export default Footer
