import http from 'http';
import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.end("hello welocome to express");
})
app.get('/about',(req,res)=>{
    res.end(`my name is ${req.query.name} nice to meet you`);
    // express has already built in url method i just have to use them 
})

app.listen(8000,()=>{
    console.log("we are listining");
})


// const myServer = http.createServer(app);
// myServer.listen(8000,()=>{
//     console.log("hello server");
// })

