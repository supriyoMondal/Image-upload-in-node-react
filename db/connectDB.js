const mongoose = require('mongoose');

const connectDB = async () => {
    // console.log(process.env.DATABASE_URL)
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Database connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;