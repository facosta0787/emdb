import React, { useEffect, Fragment } from 'react'
import { StatusBar } from 'react-native'
import NavigationBar from 'react-native-navbar-color'
import Title from './components/Title'
import Searcher from './components/Searcher'
import MoviesList from './components/MoviesList'
import { AppContent } from './shared/styles'

const App = () => {
  useEffect(() => {
    NavigationBar.setColor('black')
  }, [])

  return (
    <Fragment>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <AppContent>
        <Title />
        <Searcher />
        <MoviesList />
      </AppContent>
    </Fragment>
  )
}

export default App
