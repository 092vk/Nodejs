// url --> uniform resource locator 
// https://www.piyushgarg.dev/

// https:this is a protocol through which we are sending and receiving requests , other types are http , ws(web sockets), etc

// how to find the ip address of any server , --> ping domain_name_of_server eg--> ping google.com , in the terminal 


// url --> https://www.google.com/
// http--> protocol , can be other also like https , ws etc 
//www.google.com --> it is the domain , whihc is just a nick name for the ip address at which the server is hosted , it is used becuz we send request to servers through ip address , but since nobody can learn all the ip-address , we map ip-address with some domains m so that humans can read them 


// /xyx/about --> path : routes , if it has ? that means it is dynamic parameters 


// *** lets say you delete some of your dependencies , but you have their name in package.json , so if you get the command npm install , all the packages will getb installed 



import http, { createServer } from 'http';
import url from 'url';

const server = createServer((req,res)=>{
    console.log("new request received ");
    const myurl = url.parse(req.url);
    console.log(myurl);

    res.end("welcome to my server");

})

const port = 8000;

server.listen(port,()=>{
    console.log("we are listning");
})



// using url.parse() gives us attributes such as path , query(?) , pathname , serch , etc 

// separate the actual url from the query give true parameter in url.parse
//  create a server for different users to give their results from a stored file of marks 

