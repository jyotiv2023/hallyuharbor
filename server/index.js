import express from "express";
import clothingData from "./data";

const app = express();
const PORT = 3000;

app.get("/api/clothing", (req, res) => {
  res.json(clothingData);
});

app.get("/api/clothing/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = clothingData.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
