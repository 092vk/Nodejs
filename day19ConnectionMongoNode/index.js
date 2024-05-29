import express from 'express'
import mongoose, { model } from 'mongoose';

const app = express();
const PORT = 8080;


//middleware parser --> they are necessary to acess the data send in bodyb of request 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//mongo connection 
//it will return a promise 
mongoose
.connect("mongodb://127.0.0.1:27017/mydb")
.then(()=>{
    console.log("MongoDB connected ");
})
.catch((err)=>{
    console.log("error ",err);
})


//Mongo -- Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    jobTitle:{
        type:String
    },
    gender:{
        type:String,
    }
},{timestamps:true});

//here timestamps hels us in generating timestamps for when we have created the data 
//additionaly the db also generates unique id for each document 



//mongodb model
const User= mongoose.model('user',userSchema);

app.get('/',(req,res)=>{
    res.end("hello welcome to backend");
})

app.route('/me')
.get((req,res)=>{
    res.end("hello route , we are ready to insert data ");
})

app.post(("/me/users"), async(req,res)=>{
    const body = req.body;
    if(
        !body ||
        !body.firstName ||
        !body.email
    ){
        return res.status(400).json({msg:"All req fields are not filled "});
    }

    const result = await User.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        gender:body.gender,
        jobTitle:body.jobTitle,
    });

    console.log("result ", result);

    return res.status(201).json({msg : "success"});
})

app.get(("/me"), async(req,res)=>{
    const allDbUsers = await User.find({});

    const html=`
    <ul>
        ${allDbUsers
        .map((user)=>`<li>${user.firstName} - ${user.email}</li>`)
        .join("")}
    </ul>
    `
    res.send(html);
})


//setheader 
app.get("/me2", async(req,res)=>{
    const allDbUsers = await User.find({});

    res.setHeader("X-MyName" , "Piyush Garg");
    //custom header 
    //always add X to custom headers 

    return res.json(allDbUsers);

});

app.listen(PORT,()=>{
    console.log(`we are listning at ${PORT}`);
})





// so we have successfully connected our mongodb to our node application , steps :
// 1.connect the mongodb to the node application 
//     -->mongoose.connect()--> it would require URL where the mongo db is running .
//     -->mongoose.Schema --> type of data 
//     -->mongoose.model --> making of the document 

// 2. make a post request through a api to the given node app port , 
//     --> model.create()



