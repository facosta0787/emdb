import React from 'react'
import { Layout, TitleContainer, Title, Icon, List } from './styles'
import MovieItem from '../MovieItem'
import { Colors } from '../../shared/styles'

const MoviesList = props => {
  const { title, data, poster } = props
  return (
    <Layout>
      <TitleContainer>
        <Title>{title}</Title>
        <Icon name="angle-right" color={Colors.accent} size={18} />
      </TitleContainer>
      <List
        horizontal
        data={data}
        renderItem={item => <MovieItem {...item} poster={poster} />}
        keyExtractor={item => String(item.id)}
      />
    </Layout>
  )
}

export default MoviesList
