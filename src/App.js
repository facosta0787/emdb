import React, { useState, useEffect, Fragment } from 'react'
import { Text, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { apikey } from './config'
import TMDB from './api-tmdb'
import { AppContent, TitleContent, Title } from './shared/styles'

const App = () => {
  const api = new TMDB(apikey)

  const [popularMovies, setPopular] = useState([])

  useEffect(() => {
    ;(async () => {
      // const popular = await api.getpopularMovies()
      const popular = await Promise.all([
        api.getpopularMovies(),
        api.getpopularMovies(2)
      ])
      console.log(popular)
      setPopular([...popular[0].results, ...popular[1].results])
    })()
  }, [api])

  return (
    <Fragment>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <AppContent>
        <TitleContent>
          <Title>EMDB</Title>
        </TitleContent>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {popularMovies.map(movie => (
            <Text style={styles.list} key={movie.id}>
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
    color: 'white'
  }
})
