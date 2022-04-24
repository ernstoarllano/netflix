import { Movie } from "./Movie"

export interface Home {
  netflix: Movie[],
  top: Movie[],
  trending: Movie[],
  action: Movie[],
  comedy: Movie[],
  horror: Movie[],
  romance: Movie[],
  documentary: Movie[]
}