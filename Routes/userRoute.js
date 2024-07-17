const express = require('express')
const router = express.Router();
const users = require('../model/users')
const validation = require('../middleware/validation')


  

router.get('/',(req,res)=>{
    res.status(200).json(users)
})

router.get('/:id', validation,(req,res)=>{
    const user_id = req.params.id;
    if(!user_id)
    {
        res.status(400).json({'message':'bad request'})
    }
    const result = users.filter(user => user.id == user_id)
    res.status(200).json(result)
})

module.exports= router;