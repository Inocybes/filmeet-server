const app = require("./app");

const PORT = process.env.SERVER_PORT || 5005;

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
