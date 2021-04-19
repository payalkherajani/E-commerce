const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB