const express = require('express');
const connectDB = require('./db/connectDB');
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}
const imageMineType = ['image/jpeg', 'image/png', 'image/gif'];
const app = express();
const Image = require('./models/Image');
//body parser
app.use(express.json())
connectDB();

app.get('/', (req, res) => {
    res.send("Setup Complete")
})
app.post("/upload", async (req, res) => {
    const { data, imageType } = req.body;
    if (data != null && imageType != null && imageMineType.includes(imageType)) {
        let coverImage = new Buffer.from(data, 'base64');
        let coverImageType = imageType;
        try {
            let image = new Image({ coverImage, coverImageType });
            await image.save();
            return res.send("Image Upload success")
        } catch (err) {
            console.log(err.message);
            return res.status(500).json({ msg: "Image Upload failed" });
        }
    } else {
        return res.status(400).json({ msg: "Image Upload failed" });
    }
})
app.get('/upload', async (req, res) => {
    let images = [];
    try {
        images = await Image.find({});
        return res.json(images);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Server error");
    }
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));