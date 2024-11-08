const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
const PRODUCTS_FILE = path.join(__dirname, "products.json");

function loadProducts() {
  if (fs.existsSync(PRODUCTS_FILE)) {
    const data = fs.readFileSync(PRODUCTS_FILE, "utf8");
    return JSON.parse(data);
  }
  return [];
}

function saveProducts(products) {
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));
}

let products = loadProducts();

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server ishga tushdi, port: ${PORT}`);
});
