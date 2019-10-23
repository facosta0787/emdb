import styled from 'styled-components/native'
import { Colors } from '../../shared/styles'
import IconBase from 'react-native-vector-icons/FontAwesome'

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const InputWrapper = styled.View`
  flex-direction: row;
  width: 95%;
  background-color: ${Colors.darkGray};
  border-radius: 25px;
`
export const InputSearch = styled.TextInput`
  height: 40px;
  background-color: ${Colors.darkGray};
  color: ${Colors.softGray};
`

export const Icon = styled(IconBase)`
  padding-left: 20px;
  padding-top: 10px;
  margin-right: 5px;
`
