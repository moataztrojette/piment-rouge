const express = require('express');
const { singup,login ,logout,verife} = require('../controllers/user.c');
const router = express.Router()

router.post("/post",singup);
router.post('/login',login)
router.post('/logout',logout)
router.get('/verif',verife)

module.exports = router
