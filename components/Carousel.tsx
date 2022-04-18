import { useRef, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Carousel } from "../interfaces/Carousel"
import Thumbnail from "./Thumbnail"

const Carousel = ({ header, movies }: Carousel) => {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [isMoved, setIsMoved] = useState<boolean | false>(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)

    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="relative">
      <div className="relative ml-4 lg:ml-10 py-4 space-y-2">
        <h2 className="text-2xl font-semibold">{header}</h2>
        <div className="relative">
          <button className="absolute top-1/3 left-2 z-40" onClick={() => handleClick("left")}>
            <ChevronLeftIcon className="w-12 h-12" />
          </button>
          <div className="flex items-center space-x-2.5 overflow-x-scroll overflow-y-hidden scrollbar-hide" ref={carouselRef}>
            {movies.map((movie) => (
              <Thumbnail key={movie?.id} movie={movie} />
            ))}
          </div>
          <button className="absolute top-1/3 right-2 z-40" onClick={() => handleClick("right")}>
            <ChevronRightIcon className="w-12 h-12" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Carousel