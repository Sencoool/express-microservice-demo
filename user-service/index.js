// User Service

import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Davis" },
  ];
  res.json({ message: "User Details", users });
});

// start the user server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, `http://localhost:${PORT}`);
});
