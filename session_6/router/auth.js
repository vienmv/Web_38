const express = require('express')
const authRouter = new express.Router()
const authHandles = require('../modules/auth')

authRouter.post('/sign-in',authHandles.signIn)

module.exports= authRouter

