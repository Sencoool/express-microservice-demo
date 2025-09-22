// Main service - index.js
// This is API Gateway

import axios from "axios";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" })); // Allow requests from react dev server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello, API Gateway!" });
});

// route to user service
app.get("/users", async (req, res) => {
  const response = await axios.get("http://localhost:3001/");
  res.json(response.data);
});

// route to product service
app.get("/products", async (req, res) => {
  const response = await axios.get("http://localhost:3002/");
  res.json(response.data);
});

// start the main server
app.listen(PORT, () => {
  console.log(
    `API Gateway is running on port ${PORT}`,
    `http://localhost:${PORT}`
  );
});
