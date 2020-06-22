const express = require('express')
const router =new express.Router()
const authRouter =require('./auth')
const productRouter =require('./product')
router.use('/api/auth',authRouter)
router.use('/api/product',productRouter)

module.exports = router

