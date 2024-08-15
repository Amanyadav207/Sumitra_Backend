const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); 
// const locationRoutes = require('./routes/locationRoutes'); 

const app = express();


app.use(bodyParser.json());

app.use('/api/auth', authRoutes); 
// app.use('/api/location', locationRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
