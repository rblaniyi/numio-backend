// index.js
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");  // Import the user routes

// Use the routes under the '/api/users' path
app.use("/api/users", userRoutes);

// Set up a basic route to test
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

// Set the app to listen on a specific port (e.g., port 3000)
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
