import { MovieDetail } from "../../interfaces/MovieDetail"
import Header from "../../components/Header"
import HeroDetail from "../../components/HeroDetail"
import { GetServerSideProps } from "next"

const MovieDetail = ({ movie }: MovieDetail) => {
  return (
    <div className="relative">
      <Header />
      <HeroDetail movie={movie} />
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