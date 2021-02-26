const express = require("express");

const app = express();
const PORT = process.env.PORT;
const SERVER_ID = process.env.SERVER_ID;

app.get("/", (req, res) => {
  res.send({ server: SERVER_ID, port: PORT });
});

app.listen(PORT, function () {
  console.log(`Server ${SERVER_ID} running at ${PORT}`);
});
