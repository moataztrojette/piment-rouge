const express= require("express")
const router = express.Router()
const {post_client,update_client,remove,findall,serche} = require("../controllers/client.c")

router.post("/post",post_client)
router.put("/update/:id",update_client)
router.delete("/delete/:id",remove)
router.get("/serche/:nom",serche)
router.get("/findall",findall)
module.exports= router