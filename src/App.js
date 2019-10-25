import React, { useState, useEffect, Fragment } from 'react'
import { Text, ScrollView, StyleSheet, StatusBar } from 'react-native'
import NavigationBar from 'react-native-navbar-color'
import { apikey } from './config'
import TMDB from './api-tmdb'
import Title from './components/Title'
import Searcher from './components/Searcher'
import { AppContent } from './shared/styles'

const App = () => {
  const api = new TMDB(apikey)

  const [popularMovies, setPopular] = useState([])

  useEffect(() => {
    NavigationBar.setColor('black')
    ;(async () => {
      const popular = await Promise.all([
        api.getPremiereMovies(),
        api.getPremiereMovies(2)
      ])
      setPopular(
        popular.reduce((movies, current) => {
          return [...movies, ...current.results]
        }, [])
      )
    })()
  }, [])

  return (
    <Fragment>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <AppContent>
        <Title />
        <Searcher />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.list}
        >
          {popularMovies.map(movie => (
            <Text style={styles.listItem} key={movie.id}>
              {movie.title}
            </Text>
          ))}
        </ScrollView>
      </AppContent>
    </Fragment>
  )
}

export default App

const styles = StyleSheet.create({
  list: {
    marginTop: 10
  },
  listItem: {
    color: 'white'
  }
})
