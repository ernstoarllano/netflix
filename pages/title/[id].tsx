import { useState, useEffect } from "react"
import { Video } from "../../interfaces/Video"
import { MovieDetail } from "../../interfaces/MovieDetail"
import Header from "../../components/Header"
import HeroDetail from "../../components/HeroDetail"
import { GetServerSideProps } from "next"

const MovieDetail = ({ movie }: MovieDetail) => {
  const [video, setVideo] = useState<string | null>(null)

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

    fetchVideo()
  }, [movie])

  return (
    <div className="relative">
      <Header />
      <HeroDetail movie={movie} video={video} />
    </div>
  )
}

export default MovieDetail

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query

  const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.tmdb}`).then((res) => res.json())

  return {
    props: {
      movie: request
    }
  }
}