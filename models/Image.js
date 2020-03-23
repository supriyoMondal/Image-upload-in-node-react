const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = new Schema({
    coverImage: {
        type: Buffer,
        required: true
    },
    coverImageType: {
        type: String,
        required: true
    }
});

imageSchema.virtual('coverImagePath').get(function () {
    if (this.coverImage != null && this.coverImageType != null) {
        console.log("cover image loaded");
        return `data:${this.coverImageType};charset=utf-8,base64,${this.coverImage.toString('base64')}`
    }
});

module.exports = Image = mongoose.model('image', imageSchema)