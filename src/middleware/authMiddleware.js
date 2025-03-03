// Firebase authentication middleware

const { auth } = require("../config/firebaseConfig");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decodedToken = await auth.verifyIdToken(token);
    
    // Optionally check token expiration
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decodedToken.exp < currentTimestamp) {
      return res.status(403).json({ error: "Token expired" });
    }

    req.user = decodedToken; // Attach decoded token to the request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
