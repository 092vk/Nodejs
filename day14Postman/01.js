import fs from 'fs';
import express from 'express';
import data from '../day13RestDev/MOCK_DATA.json' assert{type:"json"};

const app = express();


// MiddleWare - Plugin --> used to transform the data which we are getting from the body of the api into a js object , we can get this data through req.body, 
app.use(express.urlencoded({extended:false}));


app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const userD = data.find((user)=>user.id === id);
    return res.json(userD);
})
.patch((req,res)=>{
    const incomingData = req.body;
    console.log(incomingData);
    //we will fix its last name by adding ray at last
    // incomingData=JSON.parse(incomingData);

    const incomingId = incomingData.id;
    console.log(incomingId);
    const incomingLastName = incomingData.last_name

    // data = JSON.parse(data);
    console.log(typeof data[1].id);
    console.log(typeof incomingId);

    const targetIndex = data.findIndex(item => item.id === Number(incomingId));
    console.log(targetIndex);
    // check if id !== -1 , if it is then give error

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
    
    // incomingData=JSON.parse(incomingData);  ?? don't know why 
    
    data.push({...incomingData,id:data.length +1});//adding data to data before pusing writing in original data 

    fs.writeFile("../day13RestDev/MOCK_DATA.json",JSON.stringify(data),(err,content)=>{
        return res.json({status : "success",id:data.length});
    });
})


const port = 8080;
app.listen(port,()=>{
    console.log("we are listning");
})


// JSON.parse() --> it is used when we are getting data from a file or from a external source(Json string)and we want to convert in into js object to perform actions on it 

// JSON.stringify --> it is used when we want the js object on which we performed actions and now we want to write in back to a file ,send it over a network or store in a db


// be careful and keep checking the type of data , string , int , json , object