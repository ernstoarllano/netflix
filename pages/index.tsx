import { useRecoilValue } from 'recoil'
import Head from 'next/head'
import { Home } from '../interfaces/Home'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import requests from '../utils/requests'
import { movieState } from '../atoms/atoms'

const Home = ({ netflixOriginals, topRated }: Home) => {
  const movie = useRecoilValue(movieState)

  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-gray-1000'>
      <Head>
        <title>
          {movie?.title || movie?.original_name || 'Home'} - Netflix
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero movies={netflixOriginals} />
      <Carousel movies={topRated} />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const [netflixOriginals, topRated] = await Promise.all([
    fetch(requests.netflixOriginals).then((res) => res.json()),
    fetch(requests.topRated).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      topRated: topRated.results,
    }
  }
}
