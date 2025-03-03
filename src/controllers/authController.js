// /controllers/authController.js

const admin = require('../config/firebaseConfig');
const db = admin.firestore();

// User Registration
exports.registerUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });

    await db.collection('users').doc(userRecord.uid).set({
      role: role || 'user', // Default to 'user'
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: userRecord,
    });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    const userDoc = await db.collection('users').doc(uid).get();
    const role = userDoc.exists ? userDoc.data().role : 'user';

    res.status(200).json({
      message: 'Login successful',
      uid,
      role,
    });
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID token', error: err.message });
  }
};
