const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("init");
});

router.get("/test", (req, res) => {
  res.send("hello");
});

module.exports = router;
