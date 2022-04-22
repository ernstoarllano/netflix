import { HeroDetail } from "../interfaces/HeroDetail"

const HeroDetail = ({ movie, video }: HeroDetail) => {
  return (
    <div className="flex flex-col justify-center h-screen-3/4 sm:h-screen-landscape lg:h-screen-3/4 px-4 lg:px-10 space-y-4">
      <div className="absolute top-0 left-0 right-0 -z-10 w-screen h-screen-3/4 sm:h-screen-landscape lg:h-screen-3/4">
        
      </div>
      <h1 className="text-4xl lg:text-7xl font-bold">
        {movie?.title}
      </h1>
      <div className="flex items-center space-x-2">
        <span>{movie?.release_date} |</span>
        <span>{movie?.genres[0].name} |</span>
        <span>{movie?.runtime}</span>
      </div>
      <p className="max-w-xs md:max-w-lg lg:max-w-2xl text-md md:text-lg lg:text-xl text-shadow-md">
        {movie?.overview}
      </p>
    </div>
  )
}

export default HeroDetail