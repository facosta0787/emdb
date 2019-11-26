import React, { useEffect, Fragment, useState } from 'react'
import { StatusBar } from 'react-native'
import NavigationBar from 'react-native-navbar-color'
import Title from '../components/Title'
import Searcher from '../components/Searcher'
import { SafeAreaView, AppContent } from '../shared/styles'
import api from '../api-tmdb/index'
import TvShowList from '../components/TvShowList/TvShowList'

const TVShows = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    NavigationBar.setColor('black')
  }, [])

  useEffect(() => {
    const fecthData = async () => {
      const result = await api.getPopularTv()
      setPopular(result.results)
    }

    fecthData()
  }, [])

  return (
    <Fragment>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SafeAreaView>
        <AppContent>
          <Title />
          <Searcher />
          <TvShowList title="Popular" data={popular} />
        </AppContent>
      </SafeAreaView>
    </Fragment>
  )
}

export default TVShows
