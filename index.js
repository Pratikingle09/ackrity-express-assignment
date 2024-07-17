const express = require('express')
const productRouter = require('./Routes/productRoute')
const userRouter = require('./Routes/userRoute')
const app = express()
const PORT = 3000

app.use(express.json())
app.use('/products',productRouter)
app.use('/users',userRouter)
app.use(express.urlencoded({ extended: true }));
app.listen(PORT,(req,res)=>{
    console.log(`app is running on ${PORT}`)
})