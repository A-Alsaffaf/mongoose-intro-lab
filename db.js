const mongoose = require('mongoose')


async function connectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.DBCONNECTION_URI) // <----- PUT YOUR DATABASE CONNECTION STRING HERE
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}

module.exports = connectToDB