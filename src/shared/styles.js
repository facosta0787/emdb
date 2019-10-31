import styled from 'styled-components/native'

export const Colors = {
  darkGray: '#1c202a',
  softGray: '#686e75',
  accent: '#1ed1c2',
  black: '#000000',
  white: '#ffffff'
}

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.black};
`

export const AppContent = styled.View`
  padding-left: 15px;
  padding-right: 15px;
`
