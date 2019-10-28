import React from 'react'
import { Card, Image, CaptionContainer, Caption } from './styles'

const MovieItem = () => {
  return (
    <Card>
      <Image
        style={{ width: '100%', height: '100%' }}
        source={{
          uri:
            'https://image.tmdb.org/t/p/w500_and_h282_face/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg'
        }}
      />
      <CaptionContainer>
        <Caption>Arrow</Caption>
      </CaptionContainer>
    </Card>
  )
}

export default MovieItem
