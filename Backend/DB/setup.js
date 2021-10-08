const mongoose = require("mongoose")

module.exports = ()=>{
    mongoose.connect("mongodb+srv://Piment-Rouge:Trojette123@cluster0.pu8jq.mongodb.net/piementRouge", { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
      if (err) throw err;
      console.log("Connected to db");
    }
    );
}

