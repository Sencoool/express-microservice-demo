// Product Service

import express from "express";
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  const products = [
    { id: 1, name: "Shirt" },
    { id: 2, name: "Pants" },
    { id: 3, name: "Jacket" },
    { id: 4, name: "Shoes" },
    { id: 5, name: "Hat" },
  ];
  res.json({ message: "Product List", products });
});

// start the product server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, `http://localhost:${PORT}`);
});
