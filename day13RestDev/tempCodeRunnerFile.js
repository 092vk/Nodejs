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
