const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

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

  if (!newProduct.image || !newProduct.title || !newProduct.price) {
    return res.status(400).json({ error: "Barcha maydonlar talab qilinadi" });
  }

  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server ishga tushdi, port: ${PORT}`);
});
