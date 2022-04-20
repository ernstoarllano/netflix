import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import { Hero } from "../interfaces/Hero"
import { Movie } from "../interfaces/Movie"
import { movieState } from "../atoms/atoms"
import { tmdb } from "../constants/movie"
import Image from "next/image"
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/solid"

const Hero = ({ movies }: Hero) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)])
  }, [movies])

  return (
    <div className="flex flex-col justify-center h-screen-2/3 lg:h-screen-3/4 px-4 lg:px-10 space-y-4">
      <div className="absolute top-0 left-0 right-0 -z-10 w-screen h-screen">
        <Image layout="fill" objectFit="cover" src={`${tmdb}${movie?.backdrop_path || movie?.poster_path}`} alt={movie?.title} />
      </div>
      <h1 className="text-4xl lg:text-7xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs md:max-w-lg lg:max-w-2xl text-md md:text-lg lg:text-xl text-shadow-md">
        {movie?.overview}
      </p>
      <div className="flex flex-row space-x-3">
        <button className="flex items-center gap-x-1 px-6 py-2 text-sm font-semibold text-black bg-white rounded transition hover:opacity-75">
          <PlayIcon className="w-6 h-6" /> Play
        </button>
        <button className="flex items-center gap-x-1 px-6 py-2 text-sm font-semibold text-white bg-slate-500 rounded transition hover:opacity-75" onClick={() => setCurrentMovie(movie)}>
          <InformationCircleIcon className="w-6 h-6" /> More Info
        </button>
      </div>
    </div>
  )
}

export default Hero