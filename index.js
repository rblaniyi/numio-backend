require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("Numio Backend is running...");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
