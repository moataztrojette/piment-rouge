const clients = require("../models/client.model")
const piements = require("../models/piement.model")


module.exports.post_vente = async(req,res)=>{
    var datetime = new Date();

    const new_vente = new piements ({
        client : req.body.client,
        klo : req.body.klo,
        prix: req.body.prix,
        date : datetime.toISOString().slice(0,10)
        
    }) 
    await new_vente.save()
    res.status(200).send(new_vente)
}
module.exports.remove = async(req,res)=>{
    await piements.findOneAndDelete({_id:req.params.id})

    res.status(200).json("Action has been deleted successfully")
}

module.exports.find = async(req,res)=>{
    const find_vente = await piements.find({client:req.params.id}).populate("client")
    res.json(find_vente)
}

module.exports.findAll = async(req,res)=>{
    const find_All = await piements.find().populate("client")
    res.json(find_All)
}

module.exports.chiffre_Affaire = async(req,res)=>{
    const tab =[]
    const find_client = await piements.find({client:req.params.id}).select("prix")
    let  somme = 0
    for (let pas = 0; pas < find_client.length; pas++)
    {
      somme = somme + find_client[pas].prix
    }
       tab.push(somme)

    res.status(200).send(tab)
}

module.exports.max_ca = async(req,res)=>{
    const max = await piements.aggregate([
       {
           $group : {
               _id : "$client",
               count : {
                   $sum : "$prix"
               }
                
               }             
           }
   ,{
        $lookup : {
            from :"clients",
            localField : "_id",
            foreignField:"_id",
            as : "client"


        }
   }]).sort({count:-1})



    res.status(200).send(max)
}



module.exports.total_ca = async(req,res)=>{
    const max = await piements.aggregate([
       {
           $group : {
               _id : "$client",
               count : {
                   $sum : "$prix"
               }
                
               }             
           }
   ,{
        $lookup : {
            from :"clients",
            localField : "_id",
            foreignField:"_id",
            as : "client"


        }
   }]).sort({count:-1})


   const tab =[]

   let  total = 0
   for (let pas = 0; pas < max.length; pas++)
   {
    total = total + max[pas].count
   }
      tab.push(total)
      res.send(tab)
}