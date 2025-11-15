const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());

app.get('/',(req,res)=>{
    res.send(`<h1>Server running</h1>`);
})


const mongoose=require('mongoose');
app.listen(9000,()=>{
    console.log("Server running on the 9000 port successfully.......");
})