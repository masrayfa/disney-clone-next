export interface Genre {
  id: number
  name: string
}

export interface TV {
  id: number
  title: string
  backdrop_path: string
  spoken_languages: [key: string]
  overview: string
  number_of_episodes: number
  number_of_seasons: number
  popularity: number
  poster_path: string | null
  production_companies: [key: string]
  genres: []
}

export interface Movie {
  id: number
  title: string
  backdrop_path: string
  spoken_languages: [key: string]
  overview: string
  number_of_episodes: number
  number_of_seasons: number
  popularity: number
  poster_path: string | null
  production_companies: [key: string]
  genres: []
}

export interface Element {
  type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser'
}
