const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRouter = require("./routes/productRoute");

const app = express();
const mongoURL = process.env.MONGODB_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
  connectDB();
});

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});
app.get("/users", (req, res) => {
  res.send({
    users: [
      { id: 1, name: "x" },
      { id: 2, name: "y" },
    ],
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRouter);

module.exports = app;
