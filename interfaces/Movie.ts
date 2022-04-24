import { Genre } from "./Genre"
import { Releases } from "./Releases"

export interface Movie {
  poster_path: string | null,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: number[],
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string | null,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number
  genres: Genre[],
  runtime: number | 0,
  releases: Releases,
  media_type: string
}