interface Requests {
  [key: string]: string
}

const requests: Requests = {
  netflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_network=213`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.tmdb}`,
}

export default requests