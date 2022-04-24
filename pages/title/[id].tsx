import { useState, useEffect } from "react"
import { Video } from "../../interfaces/Video"
import { Release } from "../../interfaces/Releases"
import { MovieDetail } from "../../interfaces/MovieDetail"
import Header from "../../components/Header"
import HeroDetail from "../../components/HeroDetail"
import { GetServerSideProps } from "next"

const MovieDetail = ({ movie }: MovieDetail) => {
  const [video, setVideo] = useState<string | null>(null)
  const [contentRating, setContentRating] = useState<string | null>(null)

  useEffect(() => {
    if (!movie) return

    const fetchVideo = async () => {
      const mediaType = movie?.media_type === "tv" ? "tv" : "movie"
      const request = await fetch(`https://api.themoviedb.org/3/${mediaType}/${movie?.id}/videos?api_key=${process.env.tmdb}`)
      const response = await request.json()
      
      if (response.results) {
        const index = response.results.findIndex((video: Video) => video.type === "Trailer")
        setVideo(response?.results[index]?.key)
      }
    }

    const findContentRating = () => {
      if (movie?.releases?.countries.findIndex((release: Release) => release.iso_3166_1 === "US") === -1) return

      const index = movie?.releases?.countries.findIndex((release: Release) => release.iso_3166_1 === "US")
      setContentRating(movie?.releases?.countries[index].certification)
    }

    fetchVideo()
    findContentRating()
  }, [movie])

  return (
    <div className="relative">
      <Header />
      <HeroDetail
        title={movie?.title} 
        video={video} 
        contentRating={contentRating} 
        releaseDate={movie?.release_date} 
        runtTime={movie?.runtime} 
        genre={movie?.genres[0].name} 
        overview={movie?.overview}
      />
    </div>
  )
}

export default MovieDetail

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query

  const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.tmdb}&append_to_response=releases`).then((res) => res.json())

  return {
    props: {
      movie: request
    }
  }
}