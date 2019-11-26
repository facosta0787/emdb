import axios from 'axios'
import appconfig from '../config/index'
const { apikey } = appconfig

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

axios.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: apikey
  }
  return config
})

class Tmdb {
  get imageBaseUrl() {
    return 'https://image.tmdb.org/t/p/w500_and_h282_face'
  }

  async getMovieById(id) {
    try {
      const movie = await axios.get(`/movie/${id}`)
      return movie.data
    } catch (err) {
      return err
    }
  }

  async getPopularMovies(page = 1, language = 'en-US') {
    try {
      const popular = await axios.get('/movie/popular', {
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

  async getPremiereMovies(page = 1, language = 'es_MX') {
    try {
      const premieres = await axios.get('/movie/upcoming', {
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

  async getPopularTv(page = 1, language = 'es_MX') {
    try {
      const popular = await axios.get('/tv/popular', {
        params: {
          page,
          language
        }
      })
      return popular.data
    } catch (err) {
      err.message
    }
  }
}

export default new Tmdb()
