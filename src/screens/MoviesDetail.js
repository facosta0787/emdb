import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const MoviesDetail = props => {
  console.log(props.navigation.state)
  return (
    <Container>
      <Title>Movies Detail Screen</Title>
      <Text>{props.navigation.state.params.title}</Text>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
`

export default MoviesDetail
