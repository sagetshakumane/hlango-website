const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
// In server.js - update CORS configuration
app.use(cors({
    origin: [
        'https://hlango-website-frontend.onrender.com', // Your frontend URL
        'http://localhost:3000' // For local development
    ],
    credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// Routes
app.use('/api/contact', require('./routes/contact'));

// Serve React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
