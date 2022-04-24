import { HeroDetail } from "../interfaces/HeroDetail"
import { getYear } from "../helpers/getYear"
import { getRunTime } from "../helpers/getRunTime"

const HeroDetail = ({ video, title, releaseDate, contentRating, genre, runtTime, overview }: HeroDetail) => {
  return (
    <div className="flex flex-col justify-center h-screen-3/4 sm:h-screen-landscape lg:h-screen-3/4 px-4 lg:px-10 space-y-4">
      <div className="absolute top-0 left-0 right-0 -z-10 w-screen h-screen-3/4 sm:h-screen-landscape lg:h-screen-3/4">
        
      </div>
      <h1 className="text-4xl lg:text-7xl font-bold">
        {title}
      </h1>
      <div className="flex items-center space-x-2 text-sm">
        <span>{getYear(releaseDate)}</span>
        <span className="px-2 border border-white">{contentRating}</span>
        <span>{genre}</span>
        <span>{getRunTime(runtTime)}</span>
      </div>
      <p className="max-w-xs md:max-w-lg lg:max-w-2xl text-md text-shadow-md">
        {overview}
      </p>
    </div>
  )
}

export default HeroDetail