import axios from 'axios'
import { apikey } from '../config'

axios.interceptors.request.use(config => {
  config.params = config.params || {}
  config.params.api_key = apikey
  return config
})
class Tmdb {
  BASE_URL = 'https://api.themoviedb.org/3'

  async getPopularMovies(page = 1, language = 'en-US') {
    try {
      const popular = await axios.get('/movie/popular', {
        baseURL: this.BASE_URL,
        params: {
          page,
          language
        }
      })
      return popular.data
    } catch (err) {
      return err.message
    }
  }

  async getPremiereMovies(page = 1, language = 'en-US') {
    try {
      const premieres = await axios.get('/movie/upcoming', {
        baseURL: this.BASE_URL,
        params: {
          page,
          language
        }
      })
      return premieres.data
    } catch (err) {
      return err.message
    }
  }
}

export default Tmdb
