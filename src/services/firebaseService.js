// Firebase Firestore functions

// /services/firebaseService.js

const admin = require('../config/firebaseConfig');

exports.createUser = async (email, password, role) => {
  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });

    await admin.firestore().collection('users').doc(userRecord.uid).set({
      role: role || 'user', // Default to 'user'
    });

    return userRecord;
  } catch (err) {
    throw new Error('Error creating user: ' + err.message);
  }
};

exports.verifyIdToken = async (idToken) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return decodedToken;
  } catch (err) {
    throw new Error('Error verifying ID token: ' + err.message);
  }
};
