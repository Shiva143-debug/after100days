const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

module.exports = app.get("/", (request, response) => {
  const day = addDays(new Date(), 100);

  response.send(`${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`);
});

app.listen(3000);
