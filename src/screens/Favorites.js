import React from 'react'
import styled from 'styled-components/native'

const Favorites = () => {
  return (
    <Container>
      <Title>Favorites Screen</Title>
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

export default Favorites
