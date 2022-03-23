// we will write APi and data base setup here
// import express 
const express = require("express");
//create a app variable and get all express stuff into app 
//uisng this app we will apply middleware and telling Api to start and creaitng routes etc
const app = express();
//connect with the mongodb
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
// cors this will connect this APi to frontend react 
const cors = require("cors")

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://abcd:abcd@cluster0.vqpi1.mongodb.net/employee?retryWrites=true&w=majority");

//get request from the data base 
app.get("/getUsers", (req,res)=>{
    console.log("Inside getusers")
    UserModel.find({}, (err, result) =>{
        if(err){
           res.json(err)
        }else{
            res.json(result)
        }
    });
});
app.post("/createUser", async(req,res)=>{
    console.log('here in post request')
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user)
});

// tell api to start i.e is creating a server 

app.listen(3001,()=>{
    console.log("SERVER RUNS PERFECTLY") 
})

