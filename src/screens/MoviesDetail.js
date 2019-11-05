import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components/native'
import { Colors } from '../shared/styles'
import api from '../api-tmdb'

// console.log(JSON.stringify(props.navigation.state, null, 2))
const MoviesDetail = props => {
  const { id } = props.navigation.state.params
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.getMovieById(id)
        setTimeout(() => {
          setMovie(response)
        }, 1000)
      } catch (err) {
        Alert.alert(err)
      }
    }
    fetchMovie()
  }, [id])

  const renderYear = () => {
    const year = new Date(movie.release_date)
    return String(year.getFullYear())
  }

  const renderGenres = () => {
    return movie.genres.map(gender => gender.name).join(', ')
  }

  if (movie === null)
    return (
      <Container>
        <ActivityIndicator
          size="large"
          color={Colors.accent}
          style={{ marginTop: 50 }}
        />
      </Container>
    )

  return (
    <Container>
      <BackButton onPress={() => props.navigation.goBack()}>
        <Icon name={'arrow-left'} size={18} color={'white'} regular />
      </BackButton>
      <BackDropImage
        source={{
          uri: `${api.imageBaseUrl}${movie.backdrop_path}`
        }}
      />
      <DetailsContainer>
        <Title>{movie.title}</Title>
        <Caption>{`${renderYear()} · ${renderGenres()}`}</Caption>
        <ChipsContainer>
          <Chip>IMDb: 7.1</Chip>
          <Chip>4K UHD</Chip>
          <Chip>PG-13</Chip>
        </ChipsContainer>
      </DetailsContainer>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.black};
`
const DetailsContainer = styled.View`
  flex: 1;
  width: 100%;
  z-index: 1;
  box-shadow: 0px -30px 5px black;
  padding: 15px 15px;
`
const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: ${Colors.white};
  margin-bottom: 8px;
`

const Caption = styled.Text`
  color: ${Colors.softGray};
  font-size: 14px;
`
const BackDropImage = styled.Image`
  width: 100%;
  height: 45%;
  resize-mode: cover;
`

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 20px;
  z-index: 1;
`

const ChipsContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-self: flex-start;
`

const Chip = ({ children }) => {
  const ChipContainer = styled.View`
    margin-right: 5px;
    padding: 3px;
    border: 1px solid ${Colors.accent};
    align-self: flex-start;
    border-radius: 3px;
  `

  const ChipText = styled.Text`
    font-size: 12px;
    color: white;
  `
  return (
    <ChipContainer
      style={{
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: 'rgba(30, 209, 194, 1)',
        shadowOffset: {
          height: 3,
          width: -3
        }
      }}
    >
      <ChipText>{children}</ChipText>
    </ChipContainer>
  )
}
export default MoviesDetail
