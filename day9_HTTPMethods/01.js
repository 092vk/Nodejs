// HTTP Methods 
// 1.GET --> if you want to get data from server (by default when we search in browser it makes a get request)
// 2.POST -->when you send data to be processed together with forms , usually used to send data at server 
// 3.PUT -->to update a resource or create a new resource if it does not exist(images)
// 4.PATCH --> request for partial modifications in a resource
// 5.DELETE -->request for removal of a resource 


// these protocols are needed 
// 1.resource management 
// 2.syntactic clarity
// 3.safety
// 4.resource management
// 5.compatability


import http from 'http';
import url from 'url';

const server = http.createServer((req,res)=>{
    console.log("req received");
    const Myurl = url.parse(req.url);
    console.log(Myurl);

    const myURL = Myurl.pathname;

    switch(myURL){
        case '/':
            res.end("hello server");

        case '/signup':
            if(req.method === "GET")res.end("this is a get request and this is a signUp form");

            else if(req.method === "POST"){
                //DB query
                res.end("success");
            }
        default:
            res.end("404 not found");
    }
    res.end("hello server");
})

server.listen(8000,()=>{
    console.log("listning");
})
