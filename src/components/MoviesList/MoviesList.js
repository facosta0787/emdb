import React from 'react'
import { Layout, Title, List } from './styles'
import MovieItem from '../MovieItem'

const MoviesList = ({ title, data, poster }) => {
  return (
    <Layout>
      <Title textAlignVertical="center">{title}</Title>
      <List
        horizontal
        data={data}
        renderItem={item => <MovieItem {...item} poster={poster} />}
        keyExtractor={item => item.id}
      />
    </Layout>
  )
}

export default MoviesList
