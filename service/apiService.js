const axios = require("axios");

const service = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const getPopularMovies = async () => {
  const PopularMoviesResponse = await service.get("/movie/popular", {
    params: {
      api_key: process.env.API_KEY,
    },
  });
  return PopularMoviesResponse;
};

module.exports = {
  getPopularMovies,
};
