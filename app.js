const express = require("express");
const app = express();
const sportsRouter = require("./routes/sportsRoutes");

app.use("/api/v1/sports", sportsRouter);
module.exports = app;
