import styled from 'styled-components/native'
import { Colors } from '../../shared/styles'

export const Card = styled.View`
  width: 100%;
  height: 88%;
`

export const Image = styled.Image`
  resize-mode: cover;
  border-radius: 10px;
`

export const CaptionContainer = styled.View`
  background-color: ${Colors.darkGray};
  height: 25px;
  position: relative;
  bottom: 24px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const Caption = styled.Text`
  color: ${Colors.white};
  font-size: 13px;
  padding-left: 10px;
  margin-top: 2px;
`
