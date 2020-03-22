const express = require('express');
const connectDB = require('./db/connectDB');
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const app = express();
connectDB();

app.get('/', (req, res) => {
    res.send("Setup Complete")
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));