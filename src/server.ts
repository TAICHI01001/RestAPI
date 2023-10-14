import express from "express";
import mongoose from "mongoose";

require("dotenv").config();

const personalRouter = require(`./routes/personalRoute`);

const app = express();
const port = 8080;
const url = process.env.MONGODB_PASSWORD;

//! connect to MongoDB

mongoose
  .connect(`${url}`)
  .then(() => {
    console.log(`Connect to database`);
  })
  .catch((error) => {
    console.error(`it's have mistake to connecting  database ${error}`);
  });

//* Middleware

app.use(express.json());

//TODO Router

app.use("/api/personal", personalRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
