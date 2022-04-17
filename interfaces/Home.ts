import { Movie } from './Movie'

export interface Home {
  netflixOriginals: Movie[],
  topRated: Movie[],
}