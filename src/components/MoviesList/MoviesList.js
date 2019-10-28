import React from 'react'
import { Layout, Title } from './styles'
import MovieItem from '../MovieItem'

const MoviesList = () => {
  return (
    <Layout>
      <Title textAlignVertical="center">Premieres</Title>
      <MovieItem />
    </Layout>
  )
}

export default MoviesList
