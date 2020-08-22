const mongoose = require('mongoose');

const URI = ('mongodb+srv://dbUser:dbUser@cluster0.ilktx.mongodb.net/<dbname>?retryWrites=true&w=majority');

const connectDB = async() =>{
    await mongoose.connect(URI,
        { useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Atlas connected");
}

module.exports = connectDB;