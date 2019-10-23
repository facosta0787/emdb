import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, InputWrapper, InputSearch, Icon } from './styles'
import { Colors } from '../../shared/styles'

const Searcher = () => {
  return (
    <Container>
      <InputWrapper>
        <Icon name="search" size={18} color={Colors.softGray} />
        <InputSearch
          placeholder="Search ..."
          placeholderTextColor={Colors.softGray}
          returnKeyType="search"
          maxLength={36}
        />
      </InputWrapper>
    </Container>
  )
}

export default Searcher
