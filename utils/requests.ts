interface Requests {
  [key: string]: string
}

const requests: Requests = {
  netflix: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_network=213`,
  top: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.tmdb}`,
  trending: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.tmdb}`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=28`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=35`,
  horror: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=27`,
  romance: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=10749`,
  documentary: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.tmdb}&with_genres=99`
}

export default requests