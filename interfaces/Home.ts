import { Movie } from "./Movie"

export interface Home {
  netflixOriginals: Movie[],
  topRated: Movie[],
  trending: Movie[],
  actionMovies: Movie[],
  comedyMovies: Movie[],
  horrorMovies: Movie[],
  romanceMovies: Movie[],
  documentaries: Movie[]
}