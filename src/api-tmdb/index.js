import axios from 'axios'

class Tmdb {
  constructor(apikey) {
    this.apikey = apikey
  }

  BASE_URL = 'https://api.themoviedb.org/3'

  async getpopularMovies(page = 1, language = 'en-US') {
    try {
      const popular = await axios.get('/movie/popular', {
        baseURL: this.BASE_URL,
        params: {
          api_key: '6463c6109b2b91a0af69c0d15d05ce63',
          page,
          language
        }
      })
      return popular.data
    } catch (err) {
      return err.message
    }
  }
}

export default Tmdb
