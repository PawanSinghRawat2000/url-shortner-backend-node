const express=require('express')
const connectDB=require('./connect')
const dotenv=require('dotenv').config()

const app=express()
const PORT=8000;


//connect
connectDB()

//Middleware
app.use(express.json())

//Routes
const url=require('./routes/urlRoute');
app.use('/url',url)


app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`));
