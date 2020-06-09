import React, { FC, ReactElement } from 'react'
import styled from 'styled-components/native'
import { Icon } from 'react-native-elements'

type TProps = {
  title: string
  isComplete: boolean
  onClickComplete: () => void
  onClickDelete: () => void
}

const List: any = styled.View`
  width: 100%;
  position: relative;
  background-color: ${(props: any) => (props.isComplete ? '#1fa67a' : '#fff')};
`

const ListInner: any = styled.View`
  width: 100%;
  padding: 20px 20px 10px;
`

const ListText: any = styled.Text`
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  color: ${(props: any) => (props.isComplete ? '#fff' : '#313135')};
`

const IconWrap: any = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const CardList: FC<TProps> = ({
  title,
  isComplete,
  onClickComplete,
  onClickDelete
}: TProps): ReactElement => {
  return (
    <List isComplete={isComplete}>
      <ListInner>
        <ListText isComplete={isComplete}>{title}</ListText>
        <IconWrap>
          <Icon
            raised
            reverse={isComplete}
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
            raised={!isComplete}
            reverse={isComplete}
            name={isComplete ? 'repeat' : 'check'}
            type='font-awesome'
            color='#1fa67a'
            solid={!isComplete}
            underlayColor='#ccc'
            onPress={() => onClickComplete()}
            containerStyle={{
              backgroundColor: '#000'
            }}
          />
        </IconWrap>
      </ListInner>
    </List>
  )
}

export default CardList
