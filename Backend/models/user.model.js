
const mongoose = require("mongoose")
//users
const user = new mongoose.Schema({
    nomUser : {type :String ,required:true},
    password : {type : String,required:true},
    adresseEmail: {type : String,required:true},
})

const users = mongoose.model("users",user)

module.exports = users