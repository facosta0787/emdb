import React from 'react'
import { Card, Image, CaptionContainer, Caption } from './styles'

const MovieItem = ({ item, poster }) => {
  const posterWidth = poster ? '154' : '300'
  return (
    <Card poster={poster}>
      <Image
        style={{ width: '100%', height: '100%' }}
        source={{
          uri: `https://image.tmdb.org/t/p/w${posterWidth}/${item.poster_path}`
        }}
      />
      <CaptionContainer>
        <Caption ellipsizeMode="tail" numberOfLines={1}>
          {item.title}
        </Caption>
      </CaptionContainer>
    </Card>
  )
}

export default MovieItem
