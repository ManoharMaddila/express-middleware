const express = require("express");
const app = express();
const PORT = 3000;

// 🔹 Middleware 1: JSON Body Parser
app.use(express.json());

// 🔹 Middleware 2: Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next(); // pass control to the next middleware/route
});

// Test Route: GET
app.get("/", (req, res) => {
  res.send("Hello, Express Middleware!");
});

// Test Route: POST (JSON data)
app.post("/data", (req, res) => {
  console.log("Received Data:", req.body);
  res.json({ message: "Data received successfully!", yourData: req.body });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
