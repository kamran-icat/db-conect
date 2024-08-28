const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require("cors")

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())
// Connect to MongoDB
mongoose.connect('mongodb+srv://haiderkamran2:wRQXwXCyq5utCDMV@cluster0.1j524.mongodb.net/', {
   
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

// Define the User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const userModel = mongoose.model('users', userSchema);

// Route to get all users
app.get('/', (req, res) => {
    userModel.find({})
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'An error occurred' });
        });
});

// Route to create a new user
app.post('/users', (req, res) => {
    const newUser = new userModel(req.body);
    newUser.save()
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to create user' });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
