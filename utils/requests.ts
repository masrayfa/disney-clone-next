const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const DISNEY_ID_QUERY = 'with_companies=2|3475|15935'

const requests = {
  fetchDisneyTV: `/${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&${DISNEY_ID_QUERY}`,
  fetchDisneyMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&${DISNEY_ID_QUERY}`,
  fetchDisneyActionScifiMovie: `/${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28|878${DISNEY_ID_QUERY}`,
  fetchDisneyActionMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&${DISNEY_ID_QUERY}`,
  fetchTrendingTV: `/${BASE_URL}/trending/tv/day?api_key=${API_KEY}`,
  fetchTopRatedTV: `/${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchDisneyTopRatedTV: `/${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1${DISNEY_ID_QUERY}`,
  fetchFamilyTV: `/${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=10751`,
  fetchAnimationTV: `/${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=16`,
  fetchDisneyAnimationTV: `/${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&${DISNEY_ID_QUERY}`,
  fetchDramaTV: `/${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=18`,
  fetchKidsTV: `/${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=10762`,
  fetchComedyTV: `/${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`,
}

export default requests
/**
 * Fetch list tv genres
 * https://api.themoviedb.org/3/genre/tv/list?api_key=ac292b5da6d17549af60d06c76d30b33&language=en-US
 */
/**
 * Fetch Similar Movies : https://api.themoviedb.org/3/tv/{tv_id}/similar?api_key=<<api_key>>&language=en-US&page=1
 * example: https://api.themoviedb.org/3/tv/86831/similar?api_key=ac292b5da6d17549af60d06c76d30b33&language=en-US&page=1
 */
/**
 * Fetch TV Family Genre: https://api.themoviedb.org/3/discover/tv?api_key=ac292b5da6d17549af60d06c76d30b33&language=en-US&with_genres=10751
 */
/**
 * https://api.themoviedb.org/3/tv/top_rated?api_key=ac292b5da6d17549af60d06c76d30b33&language=en-US&page=1
 * https://api.themoviedb.org/3/trending/tv/day?api_key=ac292b5da6d17549af60d06c76d30b33
 */
