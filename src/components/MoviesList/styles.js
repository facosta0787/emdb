import styled from 'styled-components/native'
import { Colors } from '../../shared/styles'
import IconBase from 'react-native-vector-icons/FontAwesome5'

export const Layout = styled.View`
  margin-top: 15px;
  width: 100%;
  height: 38%;
`

export const TitleContainer = styled.View`
  height: 12%;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 18px;
  color: ${Colors.white};
  padding-left: 2px;
`

export const List = styled.FlatList``

export const Icon = styled(IconBase)`
  padding-right: 15px;
`
