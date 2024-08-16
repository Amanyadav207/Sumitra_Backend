// firebase.js
require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = require('../firebaseKey.json'); // Download this JSON file from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL  // For Realtime Database
});

const db = admin.firestore(); // For Firestore
// const db = admin.database(); // For Realtime Database

module.exports = db;
