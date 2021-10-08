const clients = require("../models/client.model")
const piements = require("../models/piement.model")

module.exports.post_client = async(req,res)=>{
        const new_client = new clients ({
            nom : req.body.nom,
            adresse : req.body.adresse,
            numero: req.body.numero
        }) 
        await new_client.save()
        res.status(200).send(new_client)
}


module.exports.update_client = async (req,res)=>{
    const update = await clients.findByIdAndUpdate({_id:req.params.id},{
        nom : req.body.nom,
        adresse : req.body.adresse,
        numero: req.body.numero
    },{
        new:true
    })
    res.status(200).send(update)
}

module.exports.remove = async(req,res)=>{
    await clients.findByIdAndDelete({_id : req.params.id})
    await piements.deleteMany({client:req.params.id})

    res.status(200).json("Client has been deleted successfully")
}

module.exports.findall = async(req,res)=>{
    const all_clients = await clients.find()
    res.status(200).json(all_clients)
}
module.exports.serche = async(req,res)=>{
    const serche_client = await clients.find({
        nom : {$regex: req.params.nom , $options:"i"}
    })
    res.json(serche_client)
}