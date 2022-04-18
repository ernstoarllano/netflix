import { Thumbnail } from "../interfaces/Thumbnail"
import Image from "next/image"
import { tmdb } from "../constants/movie"

const Thumbnail = ({ movie }: Thumbnail) => {
  return (
    <div className="relative min-w-[380px] h-48 transition-all duration-200 ease-out md:hover:scale-105">
      <Image layout="fill" objectFit="fill" src={`${tmdb}${movie?.backdrop_path}`} alt={movie?.title} />
    </div>
  )
}

export default Thumbnail