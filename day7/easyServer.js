import http from 'http';

const server = http.createServer((req,res)=>{
    console.log("new request received");
    res.write("hello there welcome to my server ");

    setInterval(()=>{
        res.write("hello ji , welcome to my server ");
        res.end("end");
    },5000);//untill and unless we receive the complete response i.e , untill we receive the end , we will not see anything in the screen .
})

const port = 8080;

server.listen(port,()=>{
    console.log(`listening at ${port}`);
})

