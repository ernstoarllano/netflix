import Head from "next/head"
import { Home } from "../interfaces/Home"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import requests from "../utils/requests"
import useAuth from "../hooks/useAuth"

const Home = ({ netflixOriginals, topRated, trending, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries }: Home) => {
  const { loading } = useAuth()

  if (loading) return null

  return (
    <div className="relative h-screen-3/4 sm:h-screen-landscape lg:h-screen bg-gradient-to-b from-gray-900/10 to-gray-1000">
      <Head>
        <title>
          Home - Netflix
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero movies={netflixOriginals} />
      <Carousel header="Top Rated" movies={topRated} />
      <Carousel header="Trending Now" movies={trending} />
      <Carousel header="Action" movies={actionMovies} />
      <Carousel header="Comedies" movies={comedyMovies} />
      <Carousel header="Horror" movies={horrorMovies} />
      <Carousel header="Romance" movies={romanceMovies} />
      <Carousel header="Documentaries" movies={documentaries} />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const [
    netflixOriginals, 
    topRated, 
    trending, 
    actionMovies, 
    comedyMovies, 
    horrorMovies, 
    romanceMovies, 
    documentaries
  ] = await Promise.all([
    fetch(requests.netflixOriginals).then((res) => res.json()),
    fetch(requests.topRated).then((res) => res.json()),
    fetch(requests.trending).then((res) => res.json()),
    fetch(requests.actionMovies).then((res) => res.json()),
    fetch(requests.comedyMovies).then((res) => res.json()),
    fetch(requests.horrorMovies).then((res) => res.json()),
    fetch(requests.romanceMovies).then((res) => res.json()),
    fetch(requests.documentaries).then((res) => res.json())
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      topRated: topRated.results,
      trending: trending.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results
    }
  }
}
