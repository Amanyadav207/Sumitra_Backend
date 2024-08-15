const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');
const db = require('../config/firebase');
// const admin = require('firebase-admin');
// const db = require('../config/firebase');


// Sign-up using phone number
const signUpUser = async (phone_number, name) => {
  try {
    // Create user in Firebase Auth
    const userRecord = await admin.auth().createUser({
      phoneNumber: phone_number
    });

    // Store user details in Firestore
    const userRef = db.collection('users').doc(userRecord.uid);
    await userRef.set({
      user_id: userRecord.uid,
      name,
      phone_number
    });

    return { user_id: userRecord.uid, phone_number, name };
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

// Sign-in using phone number and OTP
const signInUser = async (phone_number, otp) => {
  try {
    // Verify the OTP using Firebase Auth
    const decodedToken = await admin.auth().verifyIdToken(otp);

    // Retrieve user data from Firestore
    const userRef = db.collection('users').doc(decodedToken.uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      throw new Error('User not found');
    }

    return userDoc.data(); // Returns user details including user_id, name, and phone_number
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  signUpUser,
  signInUser
};
