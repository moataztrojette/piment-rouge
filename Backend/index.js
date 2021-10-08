const express = require("express");
const app = express()
const cors = require("cors")
app.use(cors({ origin: "http://localhost:3000",credentials:true }));
app.use(express.json())
const env = require('dotenv')
const cookieSession = require('cookie-session')


env.config()
app.use(cookieSession({
    name : 'PR',
    keys : ['PR_key'],
    //maxAge 
  }))


  require('./DB/setup')()

const client = require("./routes/client.router")
const piement = require("./routes/piement.router")
const user = require("./routes/user.router")

app.use("/api/clients",client)
app.use("/api/piements",piement)
app.use("/api/users",user)


app.listen(4000,()=>{
    console.log("connected to port 4000")
})