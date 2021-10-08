const express= require("express")
const router = express.Router()
const {post_vente,find,chiffre_Affaire,max_ca,findAll,remove,total_ca} = require("../controllers/piement.c")

router.post("/post",post_vente)
router.get("/find/:id",find)
router.get("/find/ca/:id",chiffre_Affaire)
router.get("/turnover",max_ca)
router.get("/total",total_ca)
router.get("/findall",findAll)
router.delete("/delete/:id",remove)

module.exports= router