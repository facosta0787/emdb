import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert, PixelRatio } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components/native'
import { Colors } from '../shared/styles'
import api from '../api-tmdb'

// console.log(JSON.stringify(props.navigation.state, null, 2))
const MoviesDetail = props => {
  const { id } = props.navigation.state.params
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    console.log(PixelRatio.getPixelSizeForLayoutSize(200))
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
export default MoviesDetail
