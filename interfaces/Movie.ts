import { Genre } from "./Genre"
import { Releases } from "./Releases"

export interface Movie {
  title: string
  backdrop_path: string
  media_type: string
  release_date: string
  first_air_date: string
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number,
  genres: Genre[],
  runtime: number,
  releases: Releases
}