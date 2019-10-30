import React from 'react'
import styled from 'styled-components/native'

const Profile = () => {
  return (
    <Container>
      <Title>Profile Screen</Title>
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

export default Profile
