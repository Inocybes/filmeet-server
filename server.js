//import routes
const express = require("express");

//load dotenv (.env)
require("dotenv/config");
// require("dotenv").config();

const routes = require("./routes/routes");

//express object
const app = express();

// Require mongoose Data Base
require("./db/index");

//express routes

const PORT = process.env.SERVER_PORT || 5005;
const PREFIX = process.env.SERVER_PREFIX || "";

app.use(PREFIX, routes);
// console.log(PREFIX);
app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
