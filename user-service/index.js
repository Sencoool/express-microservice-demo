// User Service

import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  const user = { id: 1, name: "John Doe" };
  res.json({ message: "User Details", user });
});

// start the user server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, `http://localhost:${PORT}`);
});
