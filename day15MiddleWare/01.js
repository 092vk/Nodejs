// middleware

// middleware are like functions that lie between the request and response 

// their functions include :
// 1.process and check the req(authenticity etc)
// 2.make changes to the request and response
// 3.end the req-res cycle if anolomy found
// 4.call the next middleware





import fs from 'fs';
import express from 'express';
import data from '../day13RestDev/MOCK_DATA.json' assert{type:"json"};

const app = express();





// MiddleWare - Plugin --> used to transform the data which we are getting from the body of the api into a js object , we can get this data through req.body, 
app.use(express.urlencoded({extended:false}));

// writing our own middlewares 
app.use((req,res,next)=>{
    console.log("hello welcome to my middleware ");

    //if we give next(), it will move to either next middleware or to the routes 

    // if we give it res.someFunc() , it will return from here only and as in case of wrong req or invalid req

    // if we dont give it either , it will just remain there stuck , waiting for the response 

    next();
})

// next middleware
app.use((req,res,next)=>{
    console.log("hello from middleware 2");
    // return res.end("hey");
    next();
});


// we can also process the req and res at middleware 
app.use((req,res,next)=>{
    console.log("we are altering the req");
    req.myuserName = "vivek kumar";
    next();
})

app.use((req,res,next)=>{
    console.log(req.myuserName);
    next();
})

// // write a middleware to log the requests 
app.use((req,res,next)=>{
    fs.appendFile('log.txt',`\n ${Date.now()}:${req.ip} ${req.method}:${req.path}`,(err,content)=>{
        next();
    });
})


app.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const userD = data.find((user)=>user.id === id);
    console.log(req.myuserName);//this is set from the middleware 
    return res.json(userD);
})
.patch((req,res)=>{
    const incomingData = req.body;
    console.log(incomingData);

    const incomingId = incomingData.id;
    console.log(incomingId);
    const incomingLastName = incomingData.last_name

    console.log(typeof data[1].id);
    console.log(typeof incomingId);

    const targetIndex = data.findIndex(item => item.id === Number(incomingId));
    console.log(targetIndex);
    
    data[targetIndex].last_name=incomingLastName; 

    fs.writeFile("../day13RestDev/MOCK_DATA.json",JSON.stringify(data),(err,content)=>{
        return res.json({status : "success",changedUser:data[targetIndex]});
    });
})
.delete((req,res)=>{
    const id = Number(req.params.id);
    const indexToDelete = data.findIndex(item => item.id === id);

    if(indexToDelete !== -1){
        const removedData = data.splice(indexToDelete,1)[0];
    }

    fs.writeFile("../day13RestDev/MOCK_DATA.json",JSON.stringify(data),(err,content)=>{
        return res.json({status : "success"});
    });
})
.post((req,res)=>{
    const incomingData =req.body;
    console.log(incomingData);
    
    data.push({...incomingData,id:data.length +1});

    fs.writeFile("../day13RestDev/MOCK_DATA.json",JSON.stringify(data),(err,content)=>{
        return res.json({status : "success",id:data.length});
    });
})


const port = 8080;
app.listen(port,()=>{
    console.log("we are listning");
})
