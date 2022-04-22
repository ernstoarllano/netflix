import { useState, useEffect } from "react"
import { Thumbnail } from "../interfaces/Thumbnail"
import Link from "next/link"
import Image from "next/image"
import { tmdbBackdrop, tmdbPoster } from "../constants/movie"

const Thumbnail = ({ movie }: Thumbnail) => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const isMobile = width <= 812

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  return (
    <div className="relative min-w-poster lg:min-w-thumbnail h-52 lg:h-48 transition-all duration-200 ease-out md:hover:scale-105">
      <Link href={`/title/${movie?.id}`}>
        <a>
          <Image layout="fill" objectFit="fill" src={isMobile ? `${tmdbBackdrop}${movie?.poster_path}` : `${tmdbPoster}${movie?.backdrop_path}`} alt={movie?.title} />
        </a>
      </Link>
    </div>
  )
}

export default Thumbnail