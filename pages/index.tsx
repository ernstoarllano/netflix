import Head from "next/head"
import { Home } from "../interfaces/Home"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import requests from "../utils/requests"
import useAuth from "../hooks/useAuth"

const Home = ({ netflix, top, trending, action, comedy, horror, romance, documentary }: Home) => {
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
      <Hero movies={netflix} />
      <Carousel header="Top Rated" movies={top} />
      <Carousel header="Trending Now" movies={trending} />
      <Carousel header="Action" movies={action} />
      <Carousel header="Comedies" movies={comedy} />
      <Carousel header="Horror" movies={horror} />
      <Carousel header="Romance" movies={romance} />
      <Carousel header="documentary" movies={documentary} />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const [
    netflix, 
    top, 
    trending, 
    action, 
    comedy, 
    horror, 
    romance, 
    documentary
  ] = await Promise.all([
    fetch(requests.netflix).then((res) => res.json()),
    fetch(requests.top).then((res) => res.json()),
    fetch(requests.trending).then((res) => res.json()),
    fetch(requests.action).then((res) => res.json()),
    fetch(requests.comedy).then((res) => res.json()),
    fetch(requests.horror).then((res) => res.json()),
    fetch(requests.romance).then((res) => res.json()),
    fetch(requests.documentary).then((res) => res.json())
  ])

  return {
    props: {
      netflix: netflix.results,
      top: top.results,
      trending: trending.results,
      action: action.results,
      comedy: comedy.results,
      horror: horror.results,
      romance: romance.results,
      documentary: documentary.results
    }
  }
}
