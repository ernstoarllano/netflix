interface Requests {
  [key: string]: string
}

const requests: Requests = {
  netflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_network=213`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.tmdb}`,
  trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.tmdb}`,
  actionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=28`,
  comedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=35`,
  horrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=27`,
  romanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=10749`,
  documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=99`
}

export default requests