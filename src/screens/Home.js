import React, { useEffect, Fragment, useState } from 'react'
import { StatusBar } from 'react-native'
import NavigationBar from 'react-native-navbar-color'
import Title from '../components/Title'
import Searcher from '../components/Searcher'
import MoviesList from '../components/MoviesList'
import { SafeAreaView, AppContent } from '../shared/styles'
import api from '../api-tmdb/index'

const Home = props => {
  const [premiere, setPremiere] = useState([])
  const [popularNow, setPopularNow] = useState([])

  useEffect(() => {
    NavigationBar.setColor('black')
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const premiereData = await api.getPremiereMovies()
      setPremiere(premiereData.results)
      const popularNowData = await api.getPopularMovies()
      setPopularNow(popularNowData.results)
    }

    fetchData()
  }, [])

  return (
    <Fragment>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SafeAreaView>
        <AppContent>
          <Title />
          <Searcher />
          <MoviesList title="Premiere" data={premiere} />
          <MoviesList title="Popular Now" data={popularNow} poster />
        </AppContent>
      </SafeAreaView>
    </Fragment>
  )
}

export default Home
