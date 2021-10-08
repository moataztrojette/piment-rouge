const mongoose = require("mongoose")

const client = new mongoose.Schema({
    nom : {type:String , reqiured:true},
    adresse : {type:String, required:true},
    numero: {type:Number, required:true},
})

const clients = mongoose.model('clients',client)
module.exports = clients