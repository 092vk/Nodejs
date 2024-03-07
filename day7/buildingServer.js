// building our own server 
//log the details of each request received with date,\


import http from 'http';//this will be the library which will be used to make the server 

import fs from 'fs';

const server = http.createServer((req,res)=>{
    // createServer makes a server and takes a call back function which runs when ever we receive a request on that server whihc determines how it will receive and response 

    // req is a object which contains all the info regarding the request(user ip address ,url etc )

    // res is object which is responsibel for giving back the response 
    //to give response you can use functions like res.write() , res.writeHead(),and res.end

    //to get all info about req 
    console.log(req.headers);//this gives basic info
    console.log(req);//this gives all the info , from ip to browser etc 


    const log = `${Date.now()}: ${req.url} new req received \n`;
    console.log("received a request");
    
    // setting the res status code 
    res.statusCode= 200;

    // or you can run this 
    res.writeHead(200,{'Content-Type':'text/plain' });


    fs.appendFile('./logs.txt',log,(err,content)=>{//async code
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

