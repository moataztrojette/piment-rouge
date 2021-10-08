const mongoose = require("mongoose")

const piement = new mongoose.Schema({
    client: {type: mongoose.Types.ObjectId, ref:'clients'},
    klo : {type:String, required:true},
    prix: {type:Number,required:true},
    date: {type:String}

})

const piements = mongoose.model('piements',piement)
module.exports = piements