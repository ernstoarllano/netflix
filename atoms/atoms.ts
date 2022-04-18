import { Movie } from "../interfaces/Movie"
import { atom } from "recoil"

export const listState = atom<Movie | []>({
  key: 'listState',
  default: []
})

export const movieState = atom<Movie | null>({
  key: 'movieState',
  default: null
})