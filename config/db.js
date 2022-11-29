const mongoose = require('mongoose');

module.exports = async (param) => {
    try {
        const uri = `mongodb+srv://itsrbl:rabbul1560@cluster0.m6yim.mongodb.net/serverjs`;
        let db = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, });
        global.dbUrl = db.connections[0].db;
        console.log('DB Connected Successfully');
    } catch (error) {
        console.error(error);
    }
}