const mongoose = require('mongoose');

//const URI = ('mongodb+srv://dbUser:dbUser@cluster0.ilktx.mongodb.net/<dbname>?retryWrites=true&w=majority');

const db = process.env.MONGODB_URL

const connectDB = async() =>{
    await mongoose.connect(db,
        { useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Atlas connected");
} catch(err) {
    console.error(err.message);
    process.exit(1);
}

module.exports = connectDB;