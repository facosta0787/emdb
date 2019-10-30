import React from 'react'
import styled from 'styled-components/native'

const TVShows = () => {
  return (
    <Container>
      <Title>TV Shows Screen</Title>
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

export default TVShows
