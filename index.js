// const express = require('express')
// const { default: mongoose } = require('mongoose')
// const app = express()
// const port = 3000


// const userSchema = new mongoose.Schema({
//     name:String,
//     age: Number
// })
// const userModel = mongoose.model("users", userSchema)
// app.get('/', (req, res) => {
//     res.send(userModel.find({}).then(function(users){
//         res.json(users)
//     }).catch(function(err){
//         console.log(err)
//     }))
//   })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const app = express();
const port = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://haiderkamran2:wRQXwXCyq5utCDMV@cluster0.1j524.mongodb.net/', { // Replace 'mydatabase' with your database name
    
    
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

// // Define the User schema and model
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });
// const userModel = mongoose.model('users', userSchema);

// // Route to get all users
// app.get('/', (req, res) => {
//     userModel.find({})
//         .then(users => {
//             res.json(users); // Send the users as a JSON response
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: 'An error occurred' }); // Send an error response
//         });
// });

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
