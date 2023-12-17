import express from "express";
import products from "./api/productsApi.js";
import categories from "./api/categoriesApi.js";
import cors from "cors";
import slides from "./api/slidesApi.js";
import { Router } from "express";

const router = Router();
const app = express();
const PORT = 3000;

app.use(cors());

app.use("/api/products", router);

app.get("/api/slides", (req, res) => {
  res.json(slides);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/categories", (req, res) => {
  res.json(categories);
});

app.get("/api/products/:category", (req, res) => {
  const { category } = req.params;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  res.json(filteredProducts);
});

app.get("/api/products/:category/:subCategory", (req, res) => {
  const { category, subCategory } = req.params;
  const filteredProducts = products.filter(
    (product) =>
      product.category === category && product.subCategory === subCategory
  );
  res.json(filteredProducts);
});

// Updated route to get a single product by ID
app.get("/api/products/:category/:subCategory/:productId", (req, res) => {
  const productId = req.params.productId;
  console.log("Requested product id:", productId);

  // Find the product with the matching ID in your products array
  const product = products.find((product) => product.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
