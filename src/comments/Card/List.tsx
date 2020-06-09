import React, { FC, ReactElement } from 'react'
import styled from 'styled-components/native'
import { Icon } from 'react-native-elements'

type TProps = {
  title: string
  onClickComplete: () => void
  onClickDelete: () => void
}

const IconWrap: any = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const List: any = styled.View`
  width: 100%;
  padding: 20px 20px 10px;
`

const ListText: any = styled.Text`
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  color: #313135;
`

const CardList: FC<TProps> = ({
  title,
  onClickComplete,
  onClickDelete
}: TProps): ReactElement => {
  return (
    <List>
      <ListText>{title}</ListText>
      <IconWrap>
        <Icon
          raised
          name='trash'
          type='font-awesome'
          color='#238ae6'
          solid
          underlayColor='#ccc'
          onPress={() => onClickDelete()}
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
          onPress={() => onClickComplete()}
          containerStyle={{
            backgroundColor: '#000'
          }}
        />
      </IconWrap>
    </List>
  )
}

export default CardList
