import { useState, useEffect } from "react"

interface Types {
  [key: string]: string
}

const useMovies = (type: string) => {
  const [result, setResult] = useState()

  const types: Types = {
    netflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_network=213`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.tmdb}`,
    trending: `https://api.themoviedb.org/3/trending/week?api_key=${process.env.tmdb}`
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch(types[type])
        .then((res) => res.json())
        .then((data) => setResult(data.results))
        .catch((err) => console.error(err))
    }

    fetchData()
  }, [type])

  return {
    result
  }
} 

export default useMovies