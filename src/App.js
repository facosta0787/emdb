import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Home from './screens/Home'
import TVShows from './screens/TVShows'
import Favorites from './screens/Favorites'
import Profile from './screens/Profile'
import MoviesDetail from './screens/MoviesDetail'
import { Colors } from './shared/styles'

const getTabIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state
  let iconName = 'video'
  switch (routeName) {
    case 'Home':
      iconName = 'video'
      break
    case 'TV Shows':
      iconName = 'tv'
      break
    case 'Favorites':
      iconName = 'bookmark'
      break
    case 'Profile':
      iconName = 'user'
      break
  }

  return <Icon name={iconName} size={18} color={tintColor} regular />
}

const HomeStack = createStackNavigator(
  {
    Home,
    'Movies Detail': {
      screen: MoviesDetail
    }
  },
  {
    headerMode: 'none'
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack
    },
    'TV Shows': { screen: TVShows },
    Favorites,
    Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: Colors.accent,
      inactiveTintColor: Colors.softGray,
      style: {
        backgroundColor: Colors.darkGray
      }
    }
  }
)
export default createAppContainer(TabNavigator)
