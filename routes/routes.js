const router = require("express").Router();
const { getPopularMovies } = require("../service/apiService");

router.get("", async (req, res) => {
  const popularMovies = await getPopularMovies();
  console.log(popularMovies.data.results);
  res.send(popularMovies.data.results);
});

router.get("/test", (req, res) => {
  res.send("hello");
});

module.exports = router;
