const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the express server");
});

app.get("/products", (req, res) => {
  res.send({
    product: [
      { id: 1, name: "apple iPhone11", price: 3500 },
      { id: 2, name: "apple iPhone12", price: 3700 },
      { id: 3, name: "apple iPhone13", price: 3800 },
      { id: 4, name: "apple iPhone14", price: 4000 },
    ],
  });
});

app.listen(3002, () => {
  console.log(`server is running at 3002`);
});
