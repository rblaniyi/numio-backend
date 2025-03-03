require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const authRoutes = require("./src/routes/authRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debugging logs (remove later)
console.log("Auth Routes:", typeof authRoutes);
console.log("Payment Routes:", typeof paymentRoutes);
console.log("User Routes:", typeof userRoutes);

// Routes
app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/payments", paymentRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Numio Backend is running!");
});

app.get('/api/test', (req, res) => {
  res.json({ message: "API is working!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



