const express = require('express')
const productRouter = new express.Router()
const productHandles = require('../modules/product')


productRouter.get('/',productHandles.getMany)

productRouter.get('/:id',productHandles.getOne)

productRouter.post('/',productHandles.create)

productRouter.put('/:id',productHandles.update)

productRouter.delete('/:id',productHandles.delete)

module.exports= productRouter