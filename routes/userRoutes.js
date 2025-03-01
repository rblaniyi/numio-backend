// routes/userRoutes.js

const express = require("express");
const router = express.Router();

// Define the route for the user profile
router.get("/profile", (req, res) => {
  // Simulate fetching the profile of the currently logged-in user
  const userProfile = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "A passionate developer and music lover."
  };
  
  res.json(userProfile);
});

// Define the route to get all users
router.get("/", (req, res) => {
  res.json({ message: "Here are all the users." });
});

// Define the route to get a specific user by ID
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User with ID: ${userId}` });
});

module.exports = router;
