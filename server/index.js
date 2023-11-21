import express from "express";
import products from "./api/productsApi.js";
import categories from "./api/categoriesApi.js";
import cors from "cors";
import slides from "./api/slidesApi.js";
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/slides", (req, res) => {
  res.json(slides);
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/categories", (req, res) => {
  console.log(categories);
  res.json(categories);
});

app.get("/api/products/:category", (req, res) => {
  const { category } = req.params;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  console.log(filteredProducts);
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

app.get("/api/products/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = products.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
