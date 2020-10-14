const express = require('express');
const app=express()

app.use(express.static('20Fall'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/20Fall/index.html')
    console.log("sent!"); 
})
app.listen(process.env.PORT||3000,()=>{
    console.log('listening...');
})
