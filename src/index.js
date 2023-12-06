const express = require("express");

const app = express();

let products = [
  { id: 1, name: "apple iPhone11", price: 3500 },
  { id: 2, name: "apple iPhone12", price: 3700 },
  { id: 3, name: "apple iPhone13", price: 3800 },
  { id: 4, name: "apple iPhone14", price: 4000 },
];

app.get("/", (req, res) => {
  res.send("Welcome to the express server");
});

app.get("/products", (req, res) => {
  res.send({
    products: products,
  });
});

app.get("/products/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = products.find((product) => product.id === id);
    if (!product) {
      return res
        .status(404)
        .send({ message: `Product not found with id ${id}` });
    }
    res.send({
      product: product,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(3002, () => {
  console.log(`server is running at 3002`);
});
