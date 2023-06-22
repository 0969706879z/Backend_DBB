const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://DoubleBSport:1234@doublebsport.q3jlhah.mongodb.net/DoubleBSport', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connect Mongo DB Success")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB