const mongoose = require('mongoose');

module.exports = async (param) => {
    try {
        const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.m6yim.mongodb.net/agenda-test`;
        let db = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, });
        global.dbUrl = db.connections[0].db;
        console.log('DB Connected Successfully');
    } catch (error) {
        console.error(error);
    }
}