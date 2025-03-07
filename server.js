import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

// const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// const app = require("./app");
// console.log(process.env);

mongoose
  .connect(process.env.CONN_STR, {
    // useNewUrlParser: true,
  })
  .then((conn) => {
    console.log("DB connection successful");
  })
  .catch((error) => {
    console.log("some error has occured");
  });

const port = 4000;

app.listen(port, () => {
  console.log("server has started...");
});
