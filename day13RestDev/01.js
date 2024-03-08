// making a rest api

import express from 'express';
// importing the data 
import data from './MOCK_DATA.json' assert{type:"json"};

const app = express();

//rest api architecture
/*
GET /users - list all the users 
GET /users/1 - get the user with id =1 

POST /users - create a new user

PATCH /users/1 - Edit the user with ID 1

DELETE /user/1 - Delete the user with ID 1

*/


app.get('/',(req,res)=>{
    console.log("we have got a request");
    return res.end("welcome to my server");
})

// app.get('/users',(req,res)=>{
//     return res.json(data);
// })

// now lets say we want to make a hybrid api , which returns html for browser request and json for anyother request ,

// for otherThan - browser
app.get('/api/users',(req,res)=>{
    res.json(data);
})


// this is a non-rest style 
app.get('/users',(req,res)=>{
    const html = `
    <ul>
        ${data.map((users)=>`<li>${users.first_name}</li>`).join("")}
    </ul>
    `
    //used join to join elements of aary and remove the ','

    // if you are using js inside a string , use ${} also if you are using string inside a {} and inside it there is {} see the above example for ref 


    res.send(html);
})
// this is a non rest-style


// GET /users/1 - get the user with id =1 

// app.get('/users/1',(req,res)=>{})
// we cant use the above approach as we are passing the path dynamically , for different users path will be different 

// in express we give dynamic path as --> users/:id , here :id means that we are passig id as a variable 

// app.get("/api/users/:id",(req,res)=>{
//     const id = req.params.id;
//     const user = user.find((user)=>user.id === id);
//     return res.json(user);
// });


// POST /users - create a new user
// app.post('/api/users',(req,res)=>{
//     //to do
//     res.json({status: "pending"});
// })

// app.patch('/api/users/:id',(req,res)=>{
//     //to do
//     res.json({status: "pending"});
// })

// app.delete('/api/users/:id',(req,res)=>{
//     //to do
//     res.json({status: "pending"});
// })

// now as we can see above we have different and many http requests on the same route , so instead of writing different requests again and again we can write them together 

app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const userD = data.find((user)=>user.id === id);
    return res.json(userD);
})
.patch((req,res)=>{
    //to do
    res.json({status: "pending"});
})
.delete((req,res)=>{
    //to do
    res.json({status: "pending"});
})
.post((req,res)=>{
    //to do
    res.json({status: "pending"});
})


const port = 8080;
app.listen(port,()=>{
    console.log("we are listning");
})