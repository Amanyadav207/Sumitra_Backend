const express = require('express');
const db = require('./config/firebase'); // Import your Firebase setup

const app = express();
app.use(express.json());

// Example endpoint for adding a user
// app.post('/addUser', async (req, res) => {
//   try {
//     const { name, email, age } = req.body;
//     const userRef = db.collection('users').doc(); // Firestore
//     // const userRef = db.ref('users').push(); // Realtime Database

//     await userRef.set({ name, email, age }); // For Firestore
//     // await userRef.set({ name, email, age }); // For Realtime Database

//     res.status(201).send({ id: userRef.id }); // For Firestore
//     // res.status(201).send({ id: userRef.key }); // For Realtime Database
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// // Example endpoint for getting users
// app.get('/users', async (req, res) => {
//   try {
//     const usersSnapshot = await db.collection('users').get(); // Firestore
//     // const snapshot = await db.ref('users').once('value'); // Realtime Database
//     const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Firestore
//     // const users = snapshot.val(); // Realtime Database

//     res.send(users);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
