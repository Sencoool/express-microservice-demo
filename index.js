// Main service - index.js
// This is API Gateway

import axios from "axios";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, API Gateway!" });
});

// route to user service
app.get("/user", async (req, res) => {
  const response = await axios.get("http://localhost:3001/");
  res.json(response.data);
});

// route to product service
app.get("/product", async (req, res) => {
  const response = await axios.get("http://localhost:3002/");
  res.json(response.data);
});

// start the main server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, `http://localhost:${PORT}`);
});
