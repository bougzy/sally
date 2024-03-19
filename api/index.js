// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// MongoDB connection
mongoose.connect('mongodb+srv://sally:sally@sally.xmod3df.mongodb.net/sally');

app.use(cors({
    origin: 'sally-frontend.vercel.app', // Replace with your frontend origin
    credentials: true, // Allow cookies and credentials
  }));
  
// Define routes for user and admin operations
app.use('/api/users', require('./routes/usersRoutes'));


// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Express route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    // Access the uploaded file information using req.file
    const { filename, path, size } = req.file;
    console.log('File uploaded:', filename);

    // You can save the file information to a database or return it in the response
    res.json({ filename, path, size });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Route for greeting message
app.get('/', (req, res) => {
  res.send('Welcome to our server!'); // Send a greeting message
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
