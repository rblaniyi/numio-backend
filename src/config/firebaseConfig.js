// Firebase Admin SDK setup

const admin = require("firebase-admin");
const serviceAccount = require("../services/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://numio-60ec8.firebaseio.com",
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { admin, db, auth };

