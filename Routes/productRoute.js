const express = require('express')
const router = express.Router();
const products = require('../model/products')


  

router.get('/',(req,res)=>{
    res.status(200).json(products)
})

router.get('/:id',(req,res)=>{
    const product_id = req.params.id;
    if(!product_id)
    {
        res.status(400).json({'message':'bad request'})
    }
    const result = products.filter(product => product.id == product_id)
    res.status(200).json(result)
})

router.post('/addproduct',(req,res)=>{
    const {id,name,description,price,category} = req.body;
    if(!id || !name || !description || !price || !category)
    {
        res.status(400).json({'message':'bad request'})
    }
    products.push({id,name,description,price,category})
    res.status(200).json(req.body)
})

module.exports= router;