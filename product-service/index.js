// Product Service

import express from "express";
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  const product = { id: 1, name: "Sample Product" };
  res.json({ message: "Product List", product });
});

// start the product server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, `http://localhost:${PORT}`);
});
