const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// MongoDB connection
mongoose.connect('mongodb+srv://sally:sally@sally.xmod3df.mongodb.net/sally');

// Allow requests from multiple routes on the frontend domain, including login and register routes
const allowedOrigins = [
  'https://sally-frontend.vercel.app',
  'https://sally-frontend.vercel.app/login', // Add frontend login route
  'https://sally-frontend.vercel.app/register', // Add frontend register route
  'https://vercel.com/patrickspecials-projects/sally-frontend'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Allow cookies and credentials
}));

// Define routes for user and admin operations
app.use('/api/users', require('./routes/usersRoutes'));

// Route for greeting message
app.get('/', (req, res) => {
  res.send('Welcome to our server!'); // Send a greeting message
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
