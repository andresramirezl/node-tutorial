var mongoose = require('mongoose');

const connectDB = async (url) => {

    try {
        await mongoose.connect(url);
        console.log('BBDD connected');
    } catch (error) {
        throw new Error('Error initiating BBDD:' + error);
    }
}

module.exports = connectDB;