const users = require("../models/user.model")
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


module.exports.singup = async(req,res)=>{

    const hascode = await bcrypt.hash(req.body.password,13)
    const user = new users({
        nomUser : req.body.nomUser,
        adresseEmail : req.body.adresseEmail,
        password : hascode
    })
    await user.save()
    res.status(200).send("user Add")
}

module.exports.login = async(req,res)=>{
    
    const {adresseEmail,password} = req.body

    const user = await users.findOne({adresseEmail:adresseEmail})
    
    if(!user){
        res.status(404).send("Invalid Email or Password")
    }
    let passwordIsValid = await bcrypt.compare(password,user.password)

    if(user && passwordIsValid){
        const token = jwt.sign({
            _id : user._id,
        },process.env.SECURITE,{
            expiresIn : '15d'
        })
        req.session.token = token
        res.json({
                _id : user._id,
                adresseEmail : user.adresseEmail
        })
    }
    else {
        res.status(403).send("Invalid Email or Password")
      }
}

module.exports.logout = (req,res)=>{
    req.session = null
    res.send('logout')
}

module.exports.verife = (req,res)=>{
    const token = req.session.token
    jwt.verify(token,process.env.SECURITE,(error,decoded)=>{
      if(error){
        return res.status(403).send('invalid token')
      }
      res.json(decoded)
    })
  }
  