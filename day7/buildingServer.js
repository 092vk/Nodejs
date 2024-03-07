// building our own server 
//log the details of each request received with date,\


import http from 'http';//this will be the library which will be used to make the server 

import fs from 'fs';

const server = http.createServer((req,res)=>{
    
    const log = `${Date.now()}: ${req.url} new req received \n`;
    console.log("received a request");
    fs.appendFile('./logs.txt',log,(err,content)=>{
        if(err){
            console.log("failed");
            return;
        }
        switch(req.url){
            case '/':
                res.end("hello there user ");
                break;
            case '/about':
                res.end("i am vivek kumar");
                break;
            default:
                res.end("not found 404");
        }
        
    });   
})

const port = 8080;

server.listen(port,()=>{
    console.log("server has started");
})

