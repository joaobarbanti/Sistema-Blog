const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config();
const userRouter = require("./routes/user-routes")
const postRouter = require("./routes/post-routes")

const app = express();


// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

mongoose.set('strictQuery', false)

// connections
mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 3000")
    )
  )
  .catch((err) => console.log(err));