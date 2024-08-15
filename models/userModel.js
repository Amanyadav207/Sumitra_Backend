const db = require('../config/firebase');

// Get user by ID
const getUserById = async (userId) => {
  try {
    const userRef = db.collection('users').doc(userId);
    const doc = await userRef.get();
    if (!doc.exists) throw new Error('User not found');
    return doc.data();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Create a new user
const createUser = async (userData) => {
  const { user_id, name, phone_number } = userData;

  try {
    const userRef = db.collection('users').doc(user_id);
    await userRef.set({
      user_id,
      name,
      phone_number
    });
    return userData;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getUserById,
  createUser
};
